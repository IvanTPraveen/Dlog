from django.urls import path
from . import views

#create url path here.

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('rps/', views.RPS, name='rps'),
    path('yc/', views.yc, name='yc'),
    path('snake/', views.snake, name='snake'),
]