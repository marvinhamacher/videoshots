from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from rest_framework import status
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Screenshot
from .serializers import ScreenshotSerializer


# Create your views here.

class ListScreenshots(APIView):
    def get(self,request,format=None):
        screenshots = Screenshot.objects.all()
        serializer = ScreenshotSerializer(screenshots, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class AddScreenshots(APIView):
    def post(self,request, format=None):
        serializer = ScreenshotSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=200)
        else:
            return HttpResponse(422)

class UpdateScreenshots(UpdateAPIView):
    serializer_class = ScreenshotSerializer
    def put(self, request, id):
        print(request.data)
        if request.method == "PUT":
            instance = get_object_or_404(Screenshot, id=id)
            serializer = self.get_serializer(instance, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response(422)
    def patch(self, request, id):
        print(request.data)
        if request.method == "PATCH":
            instance = get_object_or_404(Screenshot, id=id)
            serializer = self.get_serializer(instance, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            else:
                return Response(422)


