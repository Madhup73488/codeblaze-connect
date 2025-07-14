---
title: "Lesson 3: Creating Your First Django App"
objective: "To understand the concept of Django \"apps\" and create your first one."
video: "https://www.youtube.com/embed/UmljXZIypDc"
---

### Topics

- The difference between a project and an app.
- Creating a new app with python manage.py startapp.
- Registering the app in settings.py.
- Creating your first view and URL pattern.

### Example (Creating a "Hello World" page)

Create an app: python manage.py startapp pages
In pages/views.py, create a view function that returns an HttpResponse.
In myproject/urls.py, create a path that points to your new view.

### Practice Problem

Create a new app called products. Inside this app, create a view that returns the text "This is the product list page." Wire it up to the URL /products/.
