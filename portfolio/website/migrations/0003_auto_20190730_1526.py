# Generated by Django 2.2 on 2019-07-30 15:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('website', '0002_auto_20190730_1126'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='skills',
            new_name='description',
        ),
        migrations.AlterField(
            model_name='project',
            name='img',
            field=models.ImageField(upload_to=''),
        ),
    ]
