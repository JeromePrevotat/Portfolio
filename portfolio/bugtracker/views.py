from django.shortcuts import render, redirect
from django.views.generic import View

from .forms import IssueForm

# Create your views here.

def index_view(request):
    return render(request, 'bugtracker/index.html')

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
