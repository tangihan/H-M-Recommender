from django.urls import path 
from . import views 

#URLConf
urlpatterns = [
    path('recommendation/product', views.product_recommendation),
    path('recommendation/property', views.property_recommendation),
    path('recommendation/season', views.season_recommendation)
]
