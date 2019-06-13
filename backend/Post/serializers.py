from rest_framework import serializers
from .models import Posts, Comments


class Post(serializers.ModelSerializer):

    class Meta:
        model = Posts
        fields = ['id', 'title', 'text_box', ]


class Comment(serializers.ModelSerializer):

    class Meta:
        model = Comments
        fields = ['id', 'post', 'comment_box']