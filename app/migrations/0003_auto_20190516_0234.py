# Generated by Django 2.1.7 on 2019-05-16 02:34

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("app", "0002_auto_20190516_0204")]

    operations = [
        migrations.RemoveField(model_name="player", name="user"),
        migrations.AlterField(
            model_name="game",
            name="users",
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(name="Player"),
    ]
