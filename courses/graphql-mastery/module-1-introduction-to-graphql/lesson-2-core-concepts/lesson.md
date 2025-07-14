---
title: "Lesson 2: Core Concepts"
objective: "To understand the three fundamental building blocks of any GraphQL API."
video: "https://www.youtube.com/embed/7wzR4Ig5pTI"
---

### Topics

- Schema: The contract between the client and the server, defining what's possible.
- Queries: Fetching read-only data.
- Mutations: Modifying data (creating, updating, deleting).
- Types: The building blocks of your schema.

### Example (A simple query)

```graphql
query GetUserById {
  user(id: "1") {
    id
    name
    email
  }
}
```

### Practice Problem

Write a conceptual GraphQL mutation to change a user's name. It should take the user's ID and their new name as arguments and return the updated user.
