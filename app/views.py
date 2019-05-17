from rest_framework import permissions, status
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer
import json
from django.http import HttpResponse

from .models import Game
from django.core.serializers import serialize
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model


class GameCreateView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        user = request.user
        game = Game.objects.create(room_name=request.data['room_name'])
        game.users.add(user)
        return Response({
            'id': game.id,
            'room_name': game.room_name,
            'player': user.username,
        }, status=status.HTTP_201_CREATED)


class GameListView(ListAPIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        game_objects = Game.objects.all().filter(game_status='active')
        games = [g.as_json() for g in game_objects]
        return HttpResponse(json.dumps(games), content_type="application/json")


class LoginUser(ObtainAuthToken):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        user = authenticate(username=request.data['username'], password=request.data['password'])
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'username': user.username,
            }, status=status.HTTP_200_OK)
        return Response({}, status=status.HTTP_404_NOT_FOUND)


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
