
from rest_framework import serializers
from .models import Screenshot
from drf_extra_fields.fields import Base64ImageField
from django_minio_backend import MinioBackend

class ScreenshotSerializer(serializers.ModelSerializer):
    screenshot = Base64ImageField()
    class Meta:
        model = Screenshot
        fields = '__all__'

    def create(self, validated_data):
        # Override create method to handle base64 image data
        screenshot_data = validated_data.pop('screenshot')
        screenshot = Screenshot.objects.create(screenshot=screenshot_data, **validated_data)
        return screenshot

