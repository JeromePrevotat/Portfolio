from django.shortcuts import render
from django.views.generic import View, TemplateView

# Create your views here.

APPNAME = 'risk/'

class Risk(TemplateView):
    template_name = APPNAME + 'risk.html'
