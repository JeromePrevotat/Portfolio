from django.shortcuts import render, redirect
from django.views.generic import View, ListView

from .forms import IssueForm
from .models import Issue

# Create your views here.

class Issue_ListView(ListView):
    model = Issue
    def get_queryset(self):
        return Issue.objects.all()

class Report_Issue(View):
    form_class = IssueForm
    initial = {'key': 'value'}
    template_name = 'bugtracker/report_issue.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial=self.initial)
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            form.save()
            return redirect('bugtracker-index')

        return render(request, self.template_name, {'form': form})
