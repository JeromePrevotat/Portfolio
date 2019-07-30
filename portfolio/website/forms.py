from django import forms
from website.models import Project

class ProjectForm(form.ModelForm):
    class Meta():
        model = Project
        fields = ('project_name', 'description', 'img')
        widgets = {
            'project_name':form.TextInput(attrs={'class':'textinputclass'}),
            'description':forms.Textarea(attrs={'class':'editable medium-editor-textarea postcontent'}),
            'img':forms.ImageField(),
        }
