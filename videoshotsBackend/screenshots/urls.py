from django.urls import path
from .views import ListScreenshots, AddScreenshots, UpdateScreenshots

urlpatterns = [
    path('api/list/', ListScreenshots.as_view()),
    path('api/add/', AddScreenshots.as_view()),
    path('api/update/<int:id>', UpdateScreenshots.as_view()),
]