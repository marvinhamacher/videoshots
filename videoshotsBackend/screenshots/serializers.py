
from rest_framework import serializers
from .models import Screenshot
from drf_extra_fields.fields import Base64ImageField


class ScreenshotSerializer(serializers.ModelSerializer):
    screenshot = Base64ImageField()
    class Meta:
        model = Screenshot
        fields = ['screenshot',
                  'title',
                  'description',
                  'publication_date']

    def create(self, validated_data):
        # Override create method to handle base64 image data
        screenshot_data = validated_data.pop('screenshot')
        screenshot = Screenshot.objects.create(screenshot=screenshot_data, **validated_data)
        return screenshot