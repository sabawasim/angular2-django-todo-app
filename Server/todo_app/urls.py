from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^view-all/$', views.allTasks.as_view(),name='view-all-task'),
    url(r'^view-my-task/$', views.myTasks.as_view(),name='view-my-task'),
    url(r'^close-task/$', views.closeTasks.as_view(),name='close-task'),
    url(r'^edit-task/$', views.editTasks.as_view(),name='edit-task'),
    url(r'^delete-task/$', views.deleteTasks.as_view(),name='delete-task'),
    url(r'^hide-my-done-task/$', views.hideMyCompletedTasks.as_view(),name='hide-my-task'),
    url(r'^hide-all-done-task/$', views.hideAllCompletedTasks.as_view(),name='hide-all-task'),
    
]
