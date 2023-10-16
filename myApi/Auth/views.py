from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from Auth.serializers import LoginSerializer
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


# Create your views here.
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            usuario = User.objects.get(email = request.data["email"])
            try:
                if authenticate(username=usuario.username, password=request.data["password"]):
                    token, created = Token.objects.get_or_create(user=usuario)
                    return Response({
                        'token': token.key
                    }, status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response(serializer.data, status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.data, status.HTTP_400_BAD_REQUEST)