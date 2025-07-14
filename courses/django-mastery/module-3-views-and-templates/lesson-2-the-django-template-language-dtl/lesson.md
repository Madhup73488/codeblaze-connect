---
title: "Lesson 2: The Django Template Language (DTL)"
objective: "To write dynamic HTML templates using Django's built-in template engine."
video: "https://www.youtube.com/embed/yv3eTYg_C8s?t=1200"
---

### Topics

- Template syntax: {{ variable }} and {% tag %}.
- Common tags: {% for %}, {% if %}, {% url %}.
- Template filters: |date, |length, |truncatewords.
- Template inheritance with {% extends %} and {% block %}.

### Example (A simple template)

```html
<!-- blog/post_list.html -->
{% extends "base.html" %}

{% block content %}
  <h1>Blog Posts</h1>
  {% for post in posts %}
    <article>
      <h2>{{ post.title }}</h2>
      <p>Published on: {{ post.published_date|date:"F j, Y" }}</p>
    </article>
  {% endfor %}
{% endblock content %}
```

### Practice Problem

Create a base.html template with a content block. Then, create the products/product_list.html template that extends base.html. In this template, loop through the products from the context and display each product's name and price in an <li>.
