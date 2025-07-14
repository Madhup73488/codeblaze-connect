---
title: "Lesson 1: Writing Queries and Mutations in the Client"
objective: "To learn the syntax for writing client-side queries and mutations, including variables and fragments."
video: "https://www.youtube.com/embed/Fv6_2rySj_4"
---

### Topics

- Using an HTTP client (like fetch) to send GraphQL requests.
- The structure of a GraphQL POST request.
- Variables: Passing dynamic data into your queries.
- Fragments: Creating reusable sets of fields.

### Example (A query with variables)

```graphql
query GetPost($postId: ID!) {
  post(id: $postId) {
    id
    title
    author {
      name
    }
  }
}
```
(The client would send this query string along with a separate JSON object for the variables: { "postId": "123" })

### Practice Problem

Write a GraphQL query that finds a user by their email address. The email should be passed as a variable. The query should return the user's name and the titles of all their posts.
