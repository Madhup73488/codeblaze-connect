---
title: "Lesson 1: What is Django & The MVT Architecture"
objective: "Understand Django's design philosophy and its Model-View-Template (MVT) architectural pattern."
video: "https://www.youtube.com/embed/AsQ_P3v0b0A"
---

### Topics

- Django as a "batteries-included" framework.
- The "Don't Repeat Yourself" (DRY) principle.
- The MVT (Model-View-Template) pattern vs. MVC.
- Key Use Cases: Content Management Systems, Social Networks, E-commerce sites.

### Example (Concept)

In Django's MVT pattern, a user's request hits a URL, which maps to a View. The View interacts with the Model (your database layer) to get data. It then passes that data to a Template to render the final HTML, which is sent back to the user.

### Practice Problem

For a simple blog application, identify what would be the Model, the View, and the Template for a page that displays a single blog post.
