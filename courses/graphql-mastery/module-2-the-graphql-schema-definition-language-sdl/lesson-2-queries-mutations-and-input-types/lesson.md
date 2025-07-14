---
title: "Lesson 2: Queries, Mutations, and Input Types"
objective: "To formally define the entry points for reading and writing data in your schema."
video: "https://www.youtube.com/embed/Y0lPA0c2w6U"
---

### Topics

- The special Query and Mutation types.
- Defining arguments for your fields.
- Using input types to pass complex objects as arguments to mutations.

### Example (Defining a Query and a Mutation)

```graphql
type Query {
  post(id: ID!): Post
  posts: [Post!]
}

input CreatePostInput {
  title: String!
  body: String!
  authorId: ID!
}

type Mutation {
  createPost(input: CreatePostInput!): Post
}
```

### Practice Problem

Define a mutation called updateProductPrice. It should take a productId of type ID! and a newPrice of type Float! as arguments. It should return the updated Product.
