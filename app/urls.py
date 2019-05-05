# chat/urls.py
from django.urls import path

from .views import current_user, UserList, GameList

urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view()),
    path('game/', GameList.as_view()),
]
