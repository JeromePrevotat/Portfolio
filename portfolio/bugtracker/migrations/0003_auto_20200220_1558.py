# Generated by Django 3.0.3 on 2020-02-20 14:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('bugtracker', '0002_auto_20200220_1521'),
    ]

    operations = [
        migrations.AddField(
            model_name='issue',
            name='issue_created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='issue',
            name='issued_last_modified',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='issue',
            name='issue_status',
            field=models.CharField(default='Unconfirmed', max_length=10, verbose_name='Status'),
        ),
        migrations.AlterField(
            model_name='issue',
            name='issue_url',
            field=models.URLField(blank=True, null=True, verbose_name='URL*'),
        ),
    ]
