from django.conf.urls import url
import debug_toolbar
from . import views
from django.conf.urls import include, url
urlpatterns = [
    url(r'^view-all/$', views.allUsers.as_view(),name='view-all-users'),
    url(r'^login/$', views.loginView.as_view(),name='login'),
    url(r'^logout/$', views.logoutView.as_view(),name='logout'),
    url(r'^create-user/$', views.createUserView.as_view(),name='create-users'),
    url(r'^edit-user/$', views.editUserView.as_view(),name='edit-users'),
    url(r'^__debug__/', include(debug_toolbar.urls)),
]