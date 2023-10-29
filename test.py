import requests

url = "https://api.themoviedb.org/3/search/multi?query=batman&include_adult=false&language=en-US&page=1"

headers = {
    "accept": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGZjODNmOGE2YjhhOTQwZWMzYTIwYjhlZDY5YThlNCIsInN1YiI6IjY1MmEyNTU4ZjI4ODM4MDJhMjVkYmJjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pi_qIiipkYK8TUmC3Yz3tqHI0Dz-eRzXkuxwjCHjtlw"
}

response = requests.get(url, headers=headers)

print(response.text)