from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Game(models.Model):
    room_name = models.CharField(max_length=50)
    users = models.ManyToManyField(User)
