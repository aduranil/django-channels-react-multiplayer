# Generated by Django 2.1.7 on 2019-08-17 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("app", "0032_auto_20190816_2342")]

    operations = [
        migrations.AddField(
            model_name="gameplayer",
            name="loser",
            field=models.BooleanField(default=False),
        )
    ]
