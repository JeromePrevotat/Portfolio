from django import forms
from bugtracker.models import Issue, Project
from django.contrib.auth.models import User

class IssueForm(forms.ModelForm):
    class Meta():
        model = Issue
        fields = ('issue_project', 'issue_severity', 'issue_title','issue_description','issue_env','issue_url','issue_proof','issue_steps','issue_expected','issue_extra')
        widgets = {
            'issue_project':forms.Select(),
            'issue_severity':forms.Select(),
            'issue_title':forms.TextInput(attrs={'class':'textinputclass'}),
            'issue_description':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_env':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_url':forms.TextInput(attrs={'class':'textinputclass'}),
            'issue_expected':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_steps':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_proof':forms.FileInput(),
            'issue_extra':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
        }

class UserForm(forms.ModelForm):
    class Meta():
        model = User
        fields = ('username', 'password')
        widgets = {
            'username':forms.TextInput(attrs={'class':'textinputclass'}),
            'password':forms.PasswordInput(),
            'email':forms.EmailInput(),
        }

class ProjectForm(forms.ModelForm):
    class Meta():
        model = Project
        fields = ('project_name', 'project_description')
        widgets = {
            'project_name':forms.TextInput(attrs={'class':'textinputclass'}),
            'project_description':forms.Textarea(attrs={'class':'textinputclass'}),
        }
