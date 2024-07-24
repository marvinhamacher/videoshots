from django.db import models

# Create your models here.

class Screenshot(models.Model):
    screenshot = models.ImageField(upload_to='pictures/screenshots')
    title = models.CharField(max_length=70)
    description = models.TextField(max_length=300)
    publication_date = models.DateField()

