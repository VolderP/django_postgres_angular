from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_data),
    # Access it: localhost:8000/add
    path('add/', views.addItem)
]
