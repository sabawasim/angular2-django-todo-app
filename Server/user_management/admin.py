from django.contrib import admin
from .models import Designation, Department,  Person


admin.site.register(Designation)
admin.site.register(Department)
admin.site.register(Person)