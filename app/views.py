from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from .models import Game
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login


class GameList(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request):
        user = request.user
        game = Game.create(romm_name=request.room_name)
        game.users.add(user)
        return Response({
            'room_name': game.room_name,
            'player': user.email,
        }, status=status.HTTP_201_CREATED)


class LoginUser(ObtainAuthToken):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token, created = Token.objects.get_or_create(user=request.data.username)
        return Response({
            'token': token.key,
            'username': serializer.validated_data['username'],
            'email': serializer.validated_data['email'],
        })


class GetUser(ObtainAuthToken):
    authentication_classes = (TokenAuthentication,)
    def get(self, request, *args, **kwargs):
        return Response({
            'username': request.user.username,
            'email': request.user.email,
        })


class UserList(ObtainAuthToken):
    """
    Creates the user.
    """
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                token = Token.objects.create(user=user)
                response = serializer.data
                response['token'] = token.key
                return Response(response, status=status.HTTP_201_CREATED)
