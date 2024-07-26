from django.db import models
from django_minio_backend import MinioBackend, iso_date_prefix


# Create your models here.

class Screenshot(models.Model):
    screenshot = models.FileField(verbose_name="Bild",
                            storage=MinioBackend(bucket_name='videoshots'),
                            upload_to=iso_date_prefix)

    title = models.CharField(max_length=70)
    description = models.TextField(max_length=300)
    publication_date = models.DateField()

