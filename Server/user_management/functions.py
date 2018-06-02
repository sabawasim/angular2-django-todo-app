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



def checkAvailbility(request):
    username=request.data['username']
    count_user = User.objects.filter(username=username).count()
    if count_user ==0:
        return True
    else:
        return False