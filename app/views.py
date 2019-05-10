from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import permissions, status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


class GameList(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    def post(self, request):
        return Response({}, status=status.HTTP_201_CREATED)



class GetUser(ObtainAuthToken):
    authentication_classes = (TokenAuthentication,)
    def get(self, request, *args, **kwargs):
        return Response({
            'username': request.user.username,
            'email': request.user.email,
        })

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                   context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
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
