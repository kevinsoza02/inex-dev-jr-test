# Generated by Django 4.2.5 on 2023-10-16 15:24

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('Carros', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='caracteristicas',
            name='id',
        ),
        migrations.AddField(
            model_name='caracteristicas',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
