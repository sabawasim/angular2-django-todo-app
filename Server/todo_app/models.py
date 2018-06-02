from django.db import models, transaction
from django.contrib.auth.models import User
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import signals


class Task(models.Model):

    default_nest_fields = [
            'name', 
            'description', 
            'status',
            'closed_by',
            'assigned_to'
            ]
    RULE_CHOICES=(
            ('Done','Done'),
            ('Not Done','Not Done'),  
        )

    closed_by = models.ForeignKey(User, null=True, blank=True, related_name="user_task")
    assigned_to= models.ForeignKey(User, null=False, blank=False, related_name="assign_task")
    name = models.CharField(null=False, max_length=200)
    description = models.CharField(null=True, max_length=2000)
    status = models.CharField(max_length=20,choices=RULE_CHOICES,
                            null=False,blank=False)


    def __unicode__(self):
        return self.task.name
