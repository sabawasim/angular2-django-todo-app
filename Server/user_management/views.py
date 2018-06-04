import json
from django.db import transaction
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from . models import Person,Department,Designation
from rest_framework import viewsets
from .serializers import PersonSerializer
from django.forms.models import model_to_dict
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView   
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly
    )

from django.contrib.auth import logout
from . import functions as fn


class allUsers(ListAPIView):
    try:
        permission_classes =[IsAuthenticated]
        queryset=Person.objects.all()
        serializer_class=PersonSerializer
        #return Response({serializer_class},status=status.HTTP_200_OK)
    except:
        pass
        
class loginView(APIView):
    serializer_class = AuthTokenSerializer
    permission_classes =[AllowAny]    
    def post(self, request, *args, **kwargs):
        try:
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                user = serializer.validated_data['user']
                token, created = Token.objects.get_or_create(user=user)
                return Response({'token': token.key,'username':user.username,'id':user.id,'success':True},status=status.HTTP_200_OK)
            else:
                return Response({'success': False},status=status.HTTP_200_OK)
        except:
            return Response({'success': False},status=status.HTTP_400_BAD_REQUEST)

class logoutView(APIView):
    permission_classes =[AllowAny]    
    def get(self, request, format=None):
        try:
            request.user.auth_token.delete()
            logout(request)
            return Response({'sucess': True},status=status.HTTP_200_OK)
        except:
            return Response({'sucess': False},status=status.HTTP_400_BAD_REQUEST)


class createUserView(APIView):
    serializer_class = PersonSerializer
    permission_classes =[AllowAny]    
    def post(self, request, *args, **kwargs):
        try:
            if(fn.checkAvailbility(request)):
                user = User.objects.create_user(username=request.data['username'],
                                    email=request.data['email'])
                user.set_password(request.data['password'])
                user.save()
                token, created = Token.objects.get_or_create(user=user)
                designation, created_desig=Designation.objects.get_or_create(title=request.data['designation'])
                department, created_depart=Department.objects.get_or_create(name=request.data['department'])
                person = Person.objects.create(user=user,department=department,designation=designation)
                person.save()
                return Response({'token': token.key,'success':True,'name':user.username},status=status.HTTP_200_OK)
            else:
                return Response({'success': False,'message':'User Already Registsered'},status=status.HTTP_200_OK)
        except Exception as e:
            # print("Error {0}".format(str(e.args[0])).encode("utf-8"))
            return Response({'success': False},status=status.HTTP_400_BAD_REQUEST)

class editUserView(APIView):
    serializer_class = PersonSerializer
    permission_classes =[IsAuthenticated]    
    def post(self, request, *args, **kwargs):
        try:
            if(not fn.checkAvailbility(request)):
                user = User.objects.get(username=request.data['username'])
                user.set_password(request.data['password'])
                user.email = request.data['email']
                user.save()
                designation, created_desig=Designation.objects.get_or_create(title=request.data['designation'])
                department, created_depart=Department.objects.get_or_create(name=request.data['department'])
                person = Person.objects.get(user=user)
                person.designation = designation
                person.department = department
                person.contact_no = request.data['contact_no']
                person.save()

                return Response({'success':True},status=status.HTTP_200_OK)
            else:
                return Response({'success': False,'message':'User Not Registered'},status=status.HTTP_200_OK)
        except Exception as e:
            print("Error {0}".format(str(e.args[0])).encode("utf-8"))
            return Response({'success': False},status=status.HTTP_400_BAD_REQUEST)