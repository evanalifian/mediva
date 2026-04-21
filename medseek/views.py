from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


# Create your views here.
def index(request):
  view = loader.get_template("search.html")
  return HttpResponse(view.render())
