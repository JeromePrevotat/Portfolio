"""bugtracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('website/', include('bugtracker.urls'))
"""
from django.contrib.auth import views as auth_views
from django.urls import path, re_path, include
from register import views as register_views
from . import views as bugtracker_views


urlpatterns = [
    path('bugtracker/', bugtracker_views.Issue_ListView.as_view(), name='bugtracker-index'),
    path('bugtracker/report-issue', bugtracker_views.Report_Issue.as_view(), name='report-issue'),
    path('bugtracker/register', register_views.register, name='bugtracker-register'),
    path('bugtracker/login', auth_views.LoginView.as_view(), name="bugtracker-login"),
    path('bugtracker/logout', auth_views.LogoutView.as_view(next_page='/bugtracker'), name="bugtracker-logout"),
    #path('bugtracker/pwd_reset', auth_views.PasswordResetView.as_view()),
]
