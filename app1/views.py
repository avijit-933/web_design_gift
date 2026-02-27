from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def login(request):
    
    return render(request, 'login.html')
def register(request):
    return render(request, 'register.html')
def student_dashboard(request):
    return render(request, 'student_dashboard.html')
def courses(request):
    return render(request, 'courses.html')
def course_details(request):
    return render(request,'course_details.html')
def admin1(request):
    return render(request,'admin1.html')
def help(request):
    return render(request,'help.html')