from django.db import models
from django.urls import reverse

# Create your models here.
class Project(models.Model):
    project_name = models.CharField(max_length=50)
    description = models.TextField()
    img = models.ImageField(upload_to='')

    def add_project():
        self.save()

    def __str__(self):
        return self.project_name
