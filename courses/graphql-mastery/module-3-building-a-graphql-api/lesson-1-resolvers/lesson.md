---
title: "Lesson 1: Resolvers"
objective: "To understand that resolvers are the functions that fetch the data for each field in your schema."
video: "https://www.youtube.com/embed/S1uR_N_i_20"
---

### Topics

- The resolver function signature: (parent, args, context, info).
- The purpose of each argument.
- How resolvers "resolve" the graph, field by field.

### Example (Resolvers for the hello query)

```javascript
const resolvers = {
  Query: {
    // The resolver for the 'hello' field on the Query type
    hello: (parent, args, context, info) => {
      return 'Hello from my resolver!';
    },
  },
};
```

### Practice Problem

Write a resolver for a query user(id: ID!). For now, just have it return a hardcoded user object that matches the User type you defined earlier. The returned user's ID should match the id from the args.
