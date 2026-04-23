from django.shortcuts import render
import requests


def index(request):
    return render(request, "search.html")


def result(request):
    query = request.GET.get("query", "")
    results = []

    if query:
        url = f"http://127.0.0.1:8000/api/search?q={query}"
        response = requests.get(url)
        data = response.json()

        # asumsi data dari API berupa list ranking
        results = data["results"]  # sesuaikan dengan API kamu

    return render(request, "search.html", {"query": query, "results": results})
