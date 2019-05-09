# chat/urls.py
from django.urls import path

from .views import UserList, GameList

urlpatterns = [
    path('users/', UserList.as_view()),
    path('game/', GameList.as_view()),
]
