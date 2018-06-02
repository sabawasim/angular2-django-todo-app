from django.db import models, transaction
from django.contrib.auth.models import User
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import signals


class Designation(models.Model):

    default_nest_fields = ['title']

    title = models.CharField(max_length=100)

    def __unicode__(self):
        return self.title

class Department(models.Model):

    default_nest_fields = ['name']

    name = models.CharField(max_length=100)

    def __unicode__(self):
        return self.name


class Person(models.Model):

    default_nest_fields = [
            'department', 
            'designation', 
            'contact_no'
            ]


    user = models.OneToOneField(User, null=False, blank=False, related_name="user_profile")
    designation = models.ForeignKey(Designation, null=True, blank=True, related_name="persons")
    department  = models.ForeignKey(Department, null=True, blank=True, related_name="persons")
    contact_no = models.CharField(null=True, max_length=20)
    search_last_updated = models.DateTimeField(default=timezone.now)

    def save(self, *args, **kwargs):
        self.search_last_updated = timezone.now()
        super(Person, self).save(*args, **kwargs)

    def __unicode__(self):
        return self.user.username
