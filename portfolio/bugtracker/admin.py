from django.contrib import admin
from .models import Issue, Project
from .forms import ProjectAdminForm
# Register your models here.

admin.site.register(Issue)

class ProjectAdmin(admin.ModelAdmin):
    form = ProjectAdminForm

admin.site.register(Project, ProjectAdmin)
