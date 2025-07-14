---
title: "Lesson 1: Object Types and Scalar Types"
objective: "To define the structure of the data in your API using object types and built-in scalar types."
video: "https://www.youtube.com/embed/F_Y-21g4-go"
---

### Topics

- The type keyword for defining objects.
- Built-in Scalars: Int, Float, String, Boolean, ID.
- Nullability: Using ! to mark fields as non-nullable.

### Example (Defining User and Post types)

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]
}

type Post {
  id: ID!
  title: String!
  body: String!
  author: User!
}
```

### Practice Problem

Define a Product object type. It should have a non-nullable id of type ID, a non-nullable name (String), a price (Float), and an optional description (String).
