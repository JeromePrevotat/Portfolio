# Generated by Django 3.1 on 2020-08-28 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bugtracker', '0004_auto_20200828_2322'),
    ]

    operations = [
        migrations.AlterField(
            model_name='issue',
            name='issue_created',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='issue',
            name='issue_last_modified',
            field=models.DateField(auto_now=True),
        ),
    ]
