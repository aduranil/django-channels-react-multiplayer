from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True,)
    username = serializers.CharField()
    password = serializers.CharField(min_length=4)

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password'],
        )
        return user

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
