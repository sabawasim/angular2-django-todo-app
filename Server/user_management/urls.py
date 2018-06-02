from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^view-all/$', views.allUsers.as_view(),name='view-all-users'),
    url(r'^login/$', views.loginView.as_view(),name='login'),
    url(r'^logout/$', views.logoutView.as_view(),name='logout'),
    url(r'^create-user/$', views.createUserView.as_view(),name='create-users'),
    url(r'^edit-user/$', views.editUserView.as_view(),name='edit-users'),
]