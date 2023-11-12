# image_processor/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('upload/', views.process_image, name='upload_image'),
    # You can define more URL patterns here for other functionalities
]
