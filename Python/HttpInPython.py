import requests
url = 'http://localhost:3000/employees?_page=1&_limit=2'
request = requests.get(url)
data = request.json()

print(data[0].get("id"))
