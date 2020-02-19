from django import forms
from bugtracker.models import Project

class IssueForm(form.ModelForm):
    class Meta():
        model = Issue
        fields = ('issue_title', 'issue_description', 'issue_status')
        widgets = {
            'issue_title':form.TextInput(attrs={'class':'textinputclass'}),
            'issue_description':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_status':forms.TextInput(attrs={'class':'textinputclass'}),
            'issue_env':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_url':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_proof':forms.ImageField(),
            'issue_steps':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_expected':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_extra':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'issue_severity':form.TextInput(attrs={'class':'textinputclass'}),
        }
