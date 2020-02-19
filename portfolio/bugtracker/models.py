from django.db import models
from django.urls import reverse

# Create your models here.
class Issue(models.Model):
    issue_title = models.CharField(max_length=50)
    issue_description = models.TextField()
    issue_status = models.CharField(max_length=20)
    issue_env = models.TextField()
    issue_url = models.TextField()
    issue_proof = models.FileField(upload_to='')
    issue_steps = models.TextField()
    issue_expected = models.TextField()
    issue_extra = models.TextField()
    issue_severity = models.CharField(max_length=10)

    def add_issue():
        self.save()

    def __str__(self):
        return self.issue_title
