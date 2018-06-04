from django.test import TestCase
from rest_framework.authtoken.models import Token
from django.urls import reverse
from django.contrib.auth.models import User, Group
from todo_app.models import Task
from base import views as base_views
from django.test.client import Client
from requests.auth import HTTPBasicAuth
import base64
import json

data_user = {
        'username': 'saba1',
        'email': 'saba@user.com1',
        'password': 'password1',
        'department':'Depart1',
        'designation': 'Design1'
}


data_task = {
        "name":"task 01",
        "description":"nothing",
        "status":"Done",
        "assigned_to":"user"
}

class BaseTestCase(TestCase):



    """
    Test case for todo app
    """
    def setUp(self):
        self.test_user = data_user.copy()
        user = User.objects.create_user(
            username=data_user['username'],
            email=data_user['email'],
            password=data_user['password']
        )
        self.token = Token.objects.create(user=user)

    def test_1_without_auth_user_all_task(self):
        """
        Test API all task view without authentication
        """
        client = Client()
        response = self.client.get('/todo_app/view-all/')
        self.assertEqual(response.status_code, 401)
    
    def test_2_without_auth_create_user(self):
        """
        Test for for create user API without authentication and with not allowed GET method
        """
        client = Client()
        response = self.client.get('/todo_app/add-task/')
        self.assertEqual(response.status_code, 401)

    
    def test_3_with_auth_create_task_post_success(self):
        """
        Test for for create task API with authentication and with allowed POST method with bad request data
        """
        client = Client()
        response = self.client.post('/todo_app/add-task/',data_task,format='json',**{'HTTP_AUTHORIZATION':'Token ' + self.token.key})
        self.assertEqual(response.status_code, 200)

    def test_4_with_auth_view_task_get_success(self):
        """
        Test for for all task API with authentication and with allowed GET method with bad request data
        """
        client = Client()
        response = self.client.get('/todo_app/view-all/',**{'HTTP_AUTHORIZATION':'Token ' + self.token.key})
        self.assertEqual(response.status_code, 200)

    def test_5_with_auth_delete_task_post_success(self):
        """
        Test for for delete task API with authentication and with allowed POST method with bad request data
        """
        client = Client()
        response = self.client.post('/todo_app/delete-task/',{"id":1},**{'HTTP_AUTHORIZATION':'Token ' + self.token.key})
        self.assertEqual(response.status_code, 200)

    