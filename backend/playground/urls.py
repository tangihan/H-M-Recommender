from django.urls import path 
from . import views 

#URLConf
urlpatterns = [
    path('recommendation/', views.get_recommendation)
]
