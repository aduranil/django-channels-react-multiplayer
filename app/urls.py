# chat/urls.py
from django.urls import path
from .views import UserList, GameCreateView, GetUser, LoginUser, GameListView

urlpatterns = [
    path('users/', UserList.as_view()),
    path('game/', GameCreateView.as_view()),
    path('games/', GameListView.as_view()),
    path('user/', GetUser.as_view()),
    path('login/', LoginUser.as_view())
]
