from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def get_recommendation(request):
    #getdatafromneo4j
    return HttpResponse('Hello World')