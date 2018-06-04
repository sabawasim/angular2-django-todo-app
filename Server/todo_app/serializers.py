from . models import Task

from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

from django.contrib.auth import get_user_model

from rest_framework.serializers import (
    ModelSerializer,
    SerializerMethodField
)

from rest_framework import serializers
from rest_framework.serializers import (
    CharField,
    ValidationError
    )

User = get_user_model()

class UserSerializer(ModelSerializer):
    class Meta:
        model=User
        fields=['id','username']    


class TaskSerializer(ModelSerializer):
    assigned_to=UserSerializer()
    closed_by=UserSerializer()
    created_by=UserSerializer()
    class Meta:
        model=Task
        fields=['closed_by',
            'assigned_to', 
            'name', 
            'description',
            'status',
            'id',
            'created_by']

