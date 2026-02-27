from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('student_dashboard/', views.student_dashboard, name='student_dashboard'),
    path('register/', views.register, name='register'),
    path('courses', views.courses, name='courses'),
    path('couse_list',views.couse_list,name='couse_list'),
    path('admin1',views.admin1,name='admin1')

]