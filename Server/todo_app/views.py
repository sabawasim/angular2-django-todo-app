import json
from django.db import transaction
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from . models import Task
from rest_framework import viewsets
from .serializers import TaskSerializer
from django.forms.models import model_to_dict
from rest_framework.generics import ListAPIView,CreateAPIView,RetrieveAPIView   

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly)
from django.http import JsonResponse


class allTasks(ListAPIView):
    try:
        permission_classes =[IsAuthenticated]
        queryset=Task.objects.all()
        serializer_class=TaskSerializer
        #return Response({serializer_class},status=status.HTTP_200_OK)
    except:
        pass

class myTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            user=User.objects.get(id=int(request.data['id']))
            all_task = Task.objects.filter(assigned_to=user).values('name','description','status','closed_by__username','assigned_to__username','id','created_by__username')
            return JsonResponse({"tasks": list(all_task)})
        except:
            return Response({'sucess': False},status=status.HTTP_200_OK)

class hideMyCompletedTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            user=User.objects.get(id=int(request.data['id']))
            all_task = Task.objects.filter(status="Not Done",assigned_to=user).values('name','description','status','closed_by__username','assigned_to__username','id','created_by__username')
            return JsonResponse({"tasks": list(all_task)})
        except:
            return Response({'sucess': False},status=status.HTTP_200_OK)

class hideAllCompletedTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            all_task = Task.objects.filter(status="Not Done").values('name','description','status','closed_by__username','assigned_to__username','id','created_by__username')
            return JsonResponse({"tasks": list(all_task)})
        except:
            return Response({'sucess': False},status=status.HTTP_200_OK)



class closeTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            task=Task.objects.get(id=int(request.data['id']))
            task.status="Done"
            task.closed_by = request.user
            task.save()
            return Response({"success": True})
        except:
            return Response({'sucess': False},status=status.HTTP_200_OK)

class editTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            task=Task.objects.get(id=int(request.data['id']))
            if task.created_by == request.user:
                task.name = request.data['name']
                task.description = request.data['description']
                task.status = request.data['status']
                task.assigned_to = User.objects.get(username=int(request.data['assigned_to']))
                if request.data['status'] =="Done":
                    task.closed_by = request.user
                task.save()
                return Response({"success": True})
            else:

                return Response({'sucess': False,'message':'Can only be edited by a user who created it'},status=status.HTTP_200_OK)
        except:
            return Response({'sucess': False},status=status.HTTP_200_OK)

class addTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            user= User.objects.get(username=request.data['assigned_to'])

            Task.objects.create(name=request.data['name'],description=request.data['description'],assigned_to=user,status=request.data['status'],created_by=request.user)
            return Response({"success": True})
        except:
            return Response({'sucess': False},status=status.HTTP_200_OK)


class deleteTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            task=Task.objects.get(id=int(request.data['id']))
            if task.created_by == request.user:
                task.delete()
                return Response({"success": True})
            else:

                return Response({'sucess': False,'message':'Can only be deleted by a user who created it'},status=status.HTTP_200_OK)
        except:
            return Response({'sucess': False},status=status.HTTP_200_OK)


class markdoneTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            task=Task.objects.get(id=int(request.data['id']))
            task.status ="Done"
            task.closed_by = request.user
            task.save()
            return Response({"success": True},status=status.HTTP_200_OK)
            
        except:
            return Response({'sucess': False},status=status.HTTP_200_OK)