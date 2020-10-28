from django.shortcuts import render, redirect
from django.views.generic import View, ListView
from django.contrib.auth.mixins import LoginRequiredMixin

from .forms import IssueForm, UserForm, ProjectForm
from .models import Issue, Project

# Create your views here.

class Issue_ListView(ListView):
    model = Issue
    def get_queryset(self):
        return Issue.objects.all()

class Login_Page(View):
    form_class = UserForm
    initial = {'key':'value'}
    template_name = 'bugtracker/login_page.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form':form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            return redirect('bugtracker-index')

        return render(request, self.template_name, {'form': form})

class Report_Issue(LoginRequiredMixin, View):
    form_class = IssueForm
    initial = {'key': 'value'}
    template_name = 'bugtracker/report_issue.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.issue_author = request.user
            instance.save()
            return redirect('bugtracker-index')
        return render(request, self.template_name, {'form': form})

class New_Project(LoginRequiredMixin, View):
    form_class = ProjectForm
    initial = {'key':'value'}
    template_name = 'bugtracker/add_project.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form':form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            instance = form.save(commit=False)
            instance.project_admin=request.user
            instance.save()
            return redirect('bugtracker-index')
        return render(request, self.template_name, {'form':form})
