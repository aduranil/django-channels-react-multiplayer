# chat/urls.py
from django.urls import path
from .views import UserList, GameList, GetUser, LoginUser

urlpatterns = [
    path('users/', UserList.as_view()),
    path('game/', GameList.as_view()),
    path('user/', GetUser.as_view()),
    path('login/', LoginUser.as_view())
]
