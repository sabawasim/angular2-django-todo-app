# Angular 4 - Django 1.11 with python 3 Todo Application with Google cloud config
<img src="https://raw.githubusercontent.com/sabawasim/angular2-django-todo-app/master/1.png"></img>
A simple Todo Application with:

1. User management as login,registering.
2. Task management , access based task management with allowed editing and deleting only own tasks, rest not allowed, (ALthouth on angular we allowed everything, but on django layer it is taking permission classes advantages)

3. Creation of task and assigning task to users.

4. Task completion with closed by task attributes.
<img src="https://raw.githubusercontent.com/sabawasim/angular2-django-todo-app/master/2.png"></img>
## Development server

1. npm install
2. ng serve 

1. pip3 install -r requirements.txt
2. python3 manage.py runserver 0.0.0.0:8080

3. change server url at constants.ts : SERVER_URL = 'http://35.230.159.160:8080';
<img src="https://raw.githubusercontent.com/sabawasim/angular2-django-todo-app/master/4.png"></img>
<img src="https://raw.githubusercontent.com/sabawasim/angular2-django-todo-app/master/5.png"></img>
## Production Server
1. pip3 install -r requirements.txt
2. python3 manage.py runserver 0.0.0.0:8080

## nginx configuration 

<img src="https://raw.githubusercontent.com/sabawasim/angular2-django-todo-app/master/3.png"></img>
## Running unit tests

1. python3 manage.py test (15 test cases allready successfully passed)

