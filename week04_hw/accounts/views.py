from django.shortcuts import render, redirect
from .forms import SignupForm
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout


def signup(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("login")
    else:
        form = SignupForm()

    return render(request, "signup.html", {"form":form})

def login(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            return redirect("main")
    
    return render(request, "login.html")

def main(request):
    return render(request, "main.html")

def logout(request):
    if request.user.is_authenticated:
        auth_logout(request)
        return redirect("login")
    
def mypage(request):
    return render(request, "mypage.html") # mypage.html을 화면에 렌더링하기