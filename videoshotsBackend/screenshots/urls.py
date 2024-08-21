from django.urls import path
from .views import ListScreenshots, AddScreenshots, UpdateScreenshots, DeleteScreenshot

urlpatterns = [
    path('api/list/', ListScreenshots.as_view()),
    path('api/add/', AddScreenshots.as_view()),
    path('api/update/<int:id>', UpdateScreenshots.as_view()),
    path('api/delete/<int:id>', DeleteScreenshot.as_view()),
]