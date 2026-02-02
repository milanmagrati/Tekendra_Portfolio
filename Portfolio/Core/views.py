from django.shortcuts import render
from .models import *
# Create your views here.
def home(request):
    items = Information.objects.all()
    photos = ContemporaryPhoto.objects.all().order_by('-uploaded_at')  # fetch all photos
    context = {
        'items': items,
        'photos': photos,  # pass photos to the template
    }
    return render(request, 'home.html', context)