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
            all_task = Task.objects.filter(assigned_to=user).values('name','description','status','closed_by__username')
            return JsonResponse({"tasks": list(all_task)})
        except:
            return Response({'sucess': False},status=status.HTTP_400_BAD_REQUEST)

class hideMyCompletedTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            user=User.objects.get(id=int(request.data['id']))
            all_task = Task.objects.filter(status="Not Done",assigned_to=user).values('name','description','status','closed_by__username')
            return JsonResponse({"tasks": list(all_task)})
        except:
            return Response({'sucess': False},status=status.HTTP_400_BAD_REQUEST)

class hideAllCompletedTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            all_task = Task.objects.filter(status="Not Done").values('name','description','status','closed_by__username')
            return JsonResponse({"tasks": list(all_task)})
        except:
            return Response({'sucess': False},status=status.HTTP_400_BAD_REQUEST)



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
            return Response({'sucess': False},status=status.HTTP_400_BAD_REQUEST)

class editTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            task=Task.objects.get(id=int(request.data['id']))
            if task.assigned_to == request.user:
                task.name = request.data['name']
                task.description = request.data['description']
                task.status = request.data['status']
                if request.data['status'] =="Done":
                    task.closed_by = request.user
                task.save()
                return Response({"success": True})
            else:

                return Response({'sucess': False,'message':'Can only be edited by a user who created it'},status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'sucess': False},status=status.HTTP_400_BAD_REQUEST)

class deleteTasks(APIView):
    permission_classes =[IsAuthenticated]    
    def post(self, request, format=None):
        try:
            task=Task.objects.get(id=int(request.data['id']))
            if task.assigned_to == request.user:
                task.delete()
                return Response({"success": True})
            else:

                return Response({'sucess': False,'message':'Can only be deleted by a user who created it'},status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'sucess': False},status=status.HTTP_400_BAD_REQUEST)