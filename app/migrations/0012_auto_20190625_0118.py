# Generated by Django 2.1.7 on 2019-06-25 01:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("app", "0011_game_users"),
    ]

    operations = [
        migrations.CreateModel(
            name="GamePlayer",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("followers", models.IntegerField(default=0)),
                ("stories", models.IntegerField(default=3)),
                ("started", models.BooleanField(default=False)),
                (
                    "user",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
        migrations.RemoveField(model_name="gameplayers", name="user"),
        migrations.AlterField(
            model_name="game",
            name="game_players",
            field=models.ManyToManyField(to="app.GamePlayer"),
        ),
        migrations.DeleteModel(name="GamePlayers"),
    ]
