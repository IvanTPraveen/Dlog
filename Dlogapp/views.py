from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.models import User
import requests
from numerize.numerize import numerize

# Create your views here.

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def RPS(request):
    return render(request, 'Rockpaper.html')

def snake(request):
    return render(request, 'snake.html')

def yc(request):
    if request.method == 'POST':
        idontfuckingknow = request.POST['input-yc']
        url = "https://youtube138.p.rapidapi.com/video/details/"

        querystring = {"id":idontfuckingknow,"hl":"en","gl":"US"}

        headers = {
            "X-RapidAPI-Key": "95b251cccamsh3b3f92d5f80cf62p1fc8c8jsndaa99e622323",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers, params=querystring)

        some = response.json()
        somet = some['stats']
        commentno = somet['comments']
        likes = somet['likes']
        seen = somet['views']
        picture = some['thumbnails'][0]['url']
        print(commentno)
        print(likes)
        print(seen)
        return render(request, 'yc.html', {'likes':numerize(likes), 'comments':numerize(commentno), 'views':numerize(seen), 'pic':picture})
    return render(request, 'yc.html')
