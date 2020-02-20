from django.db import models
from django.urls import reverse

# Create your models here.
class Issue(models.Model):
    issue_title = models.CharField(max_length=50, verbose_name='Title')
    issue_description = models.TextField(verbose_name='Description')
    issue_status = models.CharField(max_length=20, verbose_name='Status')
    issue_env = models.TextField(verbose_name='Environnement*', null=True, blank=True)
    issue_url = models.TextField(verbose_name='URL*', null=True, blank=True)
    issue_proof = models.FileField(upload_to='', verbose_name='Visual Proof*', null=True, blank=True)
    issue_steps = models.TextField(verbose_name='Steps to reproduce')
    issue_expected = models.TextField(verbose_name='What was expected ?')
    issue_extra = models.TextField(verbose_name='Extra Informations*', null=True, blank=True)
    issue_severity = models.CharField(max_length=10, verbose_name='Severity')

    def add_issue():
        self.save()

    def __str__(self):
        return self.issue_title
