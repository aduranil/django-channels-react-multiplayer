# Generated by Django 2.1.7 on 2019-08-06 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("app", "0027_gameplayer_user")]

    operations = [
        migrations.AlterField(
            model_name="gameplayer",
            name="id",
            field=models.AutoField(
                auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
            ),
        )
    ]