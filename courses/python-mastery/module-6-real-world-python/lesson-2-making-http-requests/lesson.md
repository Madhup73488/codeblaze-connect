---
title: "Lesson 2: Making HTTP Requests"
objective: "To interact with web APIs using the popular requests library."
video: "https://www.youtube.com/embed/tb_yK--o_5o"
---

### Topics

- Installing third-party packages with pip.
- Making GET requests to fetch data.
- Checking the response status code.
- Working with JSON data.

### Example (Fetching data from an API)

```python
import requests

# Make sure to run: pip install requests
response = requests.get("https://api.github.com/users/python")
if response.status_code == 200:
    data = response.json()
    print(f"Company: {data['company']}")
    print(f"Followers: {data['followers']}")
else:
    print(f"Error: Received status code {response.status_code}")
```

### Practice Problem

Use the requests library to fetch data from the JSONPlaceholder API for a single post (e.g., https://jsonplaceholder.typicode.com/posts/1). Print the title of the post.
