# Generated by Django 2.1.7 on 2019-08-16 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("app", "0030_gameplayer_winner")]

    operations = [
        migrations.AddField(
            model_name="gameplayer",
            name="go_live",
            field=models.IntegerField(default=2),
        ),
        migrations.AlterField(
            model_name="gameplayer",
            name="followers",
            field=models.IntegerField(default=100),
        ),
    ]
