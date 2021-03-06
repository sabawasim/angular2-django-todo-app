# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-06-02 07:29
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=2000, null=True)),
                ('status', models.CharField(choices=[('Done', 'Done'), ('Not Done', 'Not Done')], max_length=20)),
                ('closed_by', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user_task', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
