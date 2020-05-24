from django.contrib import admin
from .models import Issue, Bugtracker_User
# Register your models here.

admin.site.register(Issue)
admin.site.register(Bugtracker_User)
