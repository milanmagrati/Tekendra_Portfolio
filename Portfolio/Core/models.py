from django.db import models

# Create your models here
class Information(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='information_images/')
    desc = models.TextField("Description", blank=True, null=True)

    def __str__(self):
        return self.title 
    
    
class ContemporaryPhoto(models.Model):
    title = models.CharField(max_length=255, blank=True)  # optional
    picture = models.ImageField(upload_to='contemporary/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title or f"Photo {self.id}"
