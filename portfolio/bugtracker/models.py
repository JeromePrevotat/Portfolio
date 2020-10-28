from django.db import models
from django.urls import reverse
from django.contrib.auth.models import Group, Permission, User

# Create your models here.
class Issue(models.Model):
    SEVERITY_CHOICES = [
        ('LO', 'Low'),
        ('ME', 'Medium'),
        ('HI', 'High'),
        ('CR', 'Critical'),
    ]

    issue_project = models.CharField(max_length=20, verbose_name='From Project', default='None')
    issue_status = models.CharField(max_length=20, verbose_name='Status', default='Unconfirmed')
    issue_severity = models.CharField(max_length=2, choices=SEVERITY_CHOICES, default='LO', verbose_name='Severity')
    issue_title = models.CharField(max_length=40, verbose_name='Title')
    issue_description = models.TextField(verbose_name='Description')
    issue_env = models.TextField(verbose_name='Environnement*', null=True, blank=True)
    issue_url = models.URLField(verbose_name='URL*', null=True, blank=True)
    issue_expected = models.TextField(verbose_name='What was expected ?')
    issue_steps = models.TextField(verbose_name='Steps to reproduce')
    issue_created = models.DateField(auto_now_add=True)
    issue_last_modified = models.DateField(auto_now=True)
    issue_proof = models.FileField(upload_to='', verbose_name='Visual Proof*', null=True, blank=True)
    issue_extra = models.TextField(verbose_name='Extra Informations*', null=True, blank=True)

    def add_issue():
        self.save()

    def __str__(self):
        return self.issue_title


class Project(models.Model):
    project_name = models.CharField(max_length=20, unique=True, verbose_name='Project Name', default='None')
    project_admin = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='Project Admin')
    project_created = models.DateField(auto_now_add=True)
    project_description = models.TextField(verbose_name='Description', null=True, blank=True)
    #project_devs = USER_LIST
    #project_issue = ISSUE_LIST
    def add_project():
        self.save()

    def __str__(self):
        return self.project_name
