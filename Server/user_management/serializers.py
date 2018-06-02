from . models import Person,Department,Designation

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

class DepartmentSerializer(ModelSerializer):
    class Meta:
        model=Department
        fields=['id','name']  
        
class DesignationSerializer(ModelSerializer):
    class Meta:
        model=Designation
        fields=['id','title']  


class PersonSerializer(ModelSerializer):
    user=UserSerializer()
    department=DepartmentSerializer()
    designation=DesignationSerializer()
    class Meta:
        model=Person
        fields=['user',
            'department', 
            'designation', 
            'contact_no']

