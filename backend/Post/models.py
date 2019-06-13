from django.db import models


class Posts(models.Model):
    title = models.TextField()
    text_box = models.TextField()
    # slug = models.SlugField()

    def __str__(self):
        return (self.title)


class Comments(models.Model):
    post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    comment_box = models.TextField()

    def __str__(self):
        return (self.id)