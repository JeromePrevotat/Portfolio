from django import forms
from bugtracker.models import Issue

class IssueForm(forms.ModelForm):
    class Meta():
        model = Issue
        fields = ('issue_project', 'issue_severity', 'issue_title','issue_description','issue_env','issue_url','issue_proof','issue_steps','issue_expected','issue_extra')
        widgets = {
            'issue_project':forms.TextInput(attrs={'class':'textinputclass'}),
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
