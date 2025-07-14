---
title: "Lesson 1: What is GraphQL?"
objective: "Understand what GraphQL is, the problems it solves, and how it compares to REST."
video: "https://www.youtube.com/embed/eIQh02xuVw4"
---

### Topics

- GraphQL as a query language for your API.
- The problem with REST: Over-fetching and under-fetching data.
- The "single endpoint" philosophy of GraphQL.
- How GraphQL gives power to the client.

### Example (Concept)

With a REST API, to get a user and their posts, you might hit /users/1 and then /users/1/posts. This is two round trips (under-fetching). To get just the user's name, you might hit /users/1 and get back their name, address, email, etc. (over-fetching). With GraphQL, the client requests exactly what it needs (user { name posts { title } }) in a single request.

### Practice Problem

Think about the homepage of a social media site like Twitter or Facebook. List at least 5 different types of data you see (e.g., user profile, posts, notifications, friend list). How many separate REST API calls might this require? How would GraphQL simplify this?
