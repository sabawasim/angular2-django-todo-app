from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.i18n import JavaScriptCatalog

from . import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^todo_app/', include('todo_app.urls')),
    url(r'^user_management/', include('user_management.urls')),
    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    import debug_toolbar
    urlpatterns += [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ]
