from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View

# Create your views here.

def index_view(request):
    return render(request, 'bugtracker/index.html')
