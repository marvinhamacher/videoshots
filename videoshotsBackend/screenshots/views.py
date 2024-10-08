from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.generics import UpdateAPIView, DestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Screenshot
from .serializers import ScreenshotSerializer
from django_minio_backend import MinioBackend

# Create your views here.

class ListScreenshots(APIView):
    def get(self,request,format=None):
        screenshots = Screenshot.objects.all()
        serializer = ScreenshotSerializer(screenshots, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class AddScreenshots(APIView):
    def post(self,request, format=None):
        serializer = ScreenshotSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=200)
        else:
            return HttpResponse(422)

class UpdateScreenshots(UpdateAPIView):
    serializer_class = ScreenshotSerializer
    def put(self, request, id):
        if request.method == "PUT":
            instance = get_object_or_404(Screenshot, id=id)
            serializer = self.get_serializer(instance, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response(422)
    def patch(self, request, id):
        if request.method == "PATCH":
            print("status geht")
            instance = get_object_or_404(Screenshot, id=id)
            serializer = self.get_serializer(instance, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response(422)


class DeleteScreenshot(DestroyAPIView):
    def delete(self, request, id):
        if request.method == "DELETE":
            instance = get_object_or_404(Screenshot, id=id)
            instance.delete()
            return Response(status=200)
        else:
            return Response(422)

