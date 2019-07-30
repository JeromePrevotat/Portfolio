from django.shortcuts import render
from django.views.generic import View, ListView
from website.models import Project

# Create your views here.

class ProjectListView(ListView):
    model = Project
    def get_queryset(self):
        return Project.objects.all()
