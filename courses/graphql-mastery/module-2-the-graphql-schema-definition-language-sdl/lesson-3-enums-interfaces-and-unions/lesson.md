---
title: "Lesson 3: Enums, Interfaces, and Unions"
objective: "To create more flexible and expressive schemas using advanced SDL features."
video: "https://www.youtube.com/embed/yD_a_b-5VvE"
---

### Topics

- Enums: Restricting a value to a specific set of allowed options.
- Interfaces: Defining a contract of fields that different object types can implement.
- Union Types: Allowing a field to return one of several possible object types.

### Example (Using an Interface)

```graphql
interface Media {
  id: ID!
  url: String!
}

type Image implements Media {
  id: ID!
  url: String!
  fileSize: Int!
}

type Video implements Media {
  id: ID!
  url: String!
  duration: Int!
}
```

### Practice Problem

Create an enum called UserRole with the values ADMIN, EDITOR, and VIEWER. Add a role field to your User type that uses this enum.
