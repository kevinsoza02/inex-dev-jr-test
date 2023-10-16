from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Carros.viewset import CarrosViewSet, CreateCarrosViewSet, CarrosPaginationViewSet, CaracteristicasViewSet, CreateCaracteristicasViewSet
from Auth.views import LoginView

router = routers.DefaultRouter()
router.register(r'carros', CarrosPaginationViewSet, basename='carro')
router.register(r'carros/{id}', CarrosViewSet, basename='carro')
router.register(r'caracteristicas', CaracteristicasViewSet, basename="caracteristicas")

adm_router = routers.DefaultRouter()
adm_router.register(r'carros', CreateCarrosViewSet)
adm_router.register(r'caracteristicas', CreateCaracteristicasViewSet)


urlpatterns = [
    path('auth/', LoginView.as_view()),
    path('api/', include(router.urls)),
    path('auth/', include(adm_router.urls))
]