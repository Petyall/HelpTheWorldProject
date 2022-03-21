from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'Orgs', views.OrgViewSet)
router.register(r'OrgForm', views.OrgFormViewSet)

urlpatterns = [
    # path('', include('myapi.urls')),
    # path('', views.index, name='home'),
    path('create', views.create, name='create'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)