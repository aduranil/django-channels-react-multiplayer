# chat/urls.py
from django.urls import path

from .views import current_user, UserList, create_game

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('game/', create_game)
]
