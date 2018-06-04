from django.test import TestCase
from rest_framework.authtoken.models import Token
from django.urls import reverse
from django.contrib.auth.models import User, Group
from base import views as base_views
from django.test.client import Client
from requests.auth import HTTPBasicAuth
import base64
import json

data_user = {
        'username': 'saba',
        'email': 'saba@user.com',
        'password': 'password',
        'department':'Depart1',
        'designation': 'Design'
}

class BaseTestCase(TestCase):



    """
    Test case for users app
    """
    def setUp(self):
        self.test_user = data_user.copy()
        user = User.objects.create_user(
            username=data_user['username'],
            email=data_user['email'],
            password=data_user['password']
        )
        self.token = Token.objects.create(user=user)

    def test_1_without_auth_user(self):
        """
        Test for for view-all API without authentication
        """
        client = Client()
        response = self.client.get('/user_management/view-all/')
        self.assertEqual(response.status_code, 401)
    
    def test_2_without_auth_create_user(self):
        """
        Test for for create user API without authentication and with not allowed GET method
        """
        client = Client()
        response = self.client.get('/user_management/create-user/')
        self.assertEqual(response.status_code, 405)
    
    def test_3_without_auth_edit_user(self):
        """
        Test for for edit user API without authentication
        """
        client = Client()
        response = self.client.post('/user_management/edit-user/')
        self.assertEqual(response.status_code, 401)

    def test_4_without_auth_create_user_post(self):
        """
        Test for for create user API without authentication and with allowed POST method with bad request data
        """
        client = Client()
        response = self.client.post('/user_management/create-user/',{},format='json')
        self.assertEqual(response.status_code, 400)

    def test_5_with_auth_create_user_post(self):
        """
        Test for for create user API without authentication and with allowed POST method with bad request data
        """
        client = Client()
        response = self.client.post('/user_management/create-user/',{'user':'sample_user','password':'pass','email':'saba@saba.com','department':'PGS','designation':'Manager'},format='json')
        self.assertEqual(response.status_code, 400)
    
    def test_6_with_auth_create_user_post_success(self):
        """
        Test for for create user API with authentication and with allowed POST method with bad request data
        """
        client = Client()
        response = self.client.post('/user_management/create-user/',{"username":"ss","password":"ss","email":"ss","department":"ss","designation":"ss"},format='json')
        self.assertEqual(response.status_code, 200)

    def test_7_with_auth_login_success(self):
        """
        Test for for create user API with login success
        """
        client = Client()
        response = self.client.post('/user_management/login/',{"username":"saba","password":"password"},format='json')
        self.assertEqual(response.status_code, 200)
        self.assertIn("token",str(response.content, 'utf-8'))
        
    def test_8_with_auth_login_error(self):
        """
        Test for for create user API with login error
        """
        client = Client()
        response = self.client.post('/user_management/login/',{"username":"ss1","password":"ss"},format='json')

        self.assertIn("false",str(response.content, 'utf-8'))
        self.assertEqual(response.status_code, 200)
        
    def test_9_with_auth_edit_user_post_no_user(self):
        """
        Test for for create user API with authentication and with allowed POST method with correct request data
        """
        
        client = Client()
        response = self.client.post('/user_management/edit-user/',{"username":"ss","password":"ss","email":"ss","department":"ss","designation":"ss","contact_no":"99"},format='json', **{'HTTP_AUTHORIZATION':'Token ' + self.token.key})
        self.assertIn("User Not Registered",str(response.content, 'utf-8'))
        self.assertEqual(response.status_code, 200)
    
    def test_9_with_auth_edit_user_post(self):
        """
        Test for for create user API with authentication and with allowed POST method with bad request data
        """
        
        client = Client()
        response = self.client.post('/user_management/edit-user/',{"username":"ss","password":"ss","email":"ss","department":"ss","designation":"ss","id":1},format='json', **{'HTTP_AUTHORIZATION':'Token ' + self.token.key})
        self.assertIn("false",str(response.content, 'utf-8'))
        self.assertEqual(response.status_code, 200)