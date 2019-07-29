from django.shortcuts import render
from django.views.generic import View, TemplateView
from website.models import Project

# Create your views here.
class IndexView(TemplateView):
    template_name = 'content.html'
