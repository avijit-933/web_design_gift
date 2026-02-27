from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login, name='login'),
    path('student_dashboard/', views.student_dashboard, name='student_dashboard'),
    path('register/', views.register, name='register'),
    path('courses', views.courses, name='courses'),
    path('course_details',views.course_details,name='course_details'),
    path('admin1',views.admin1,name='admin1'),
    path('help',views.admin1,name='help')


]