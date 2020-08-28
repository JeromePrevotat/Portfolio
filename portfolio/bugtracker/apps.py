from django.apps import AppConfig

class BugtrackerConfig(AppConfig):
    name = 'bugtracker'

    def ready(self):
        from django.contrib.auth.models import Group, Permission
        #Create Groups
        dev_group, created = Group.objects.get_or_create(name="Devs")
        #Set Permissions here
