from django.shortcuts import render
from rest_framework import viewsets

from .models import Posts, Comments
from .serializers import Post, Comment


class PostViewSet(viewsets.ModelViewSet):
    serializer_class = Post
    queryset = Posts.objects.all()
