---
title: "Lesson 3: Handling Relationships"
objective: "To resolve nested fields and relationships between types."
video: "https://www.youtube.com/embed/0_M-n_3-M-Q"
---

### Topics

- How GraphQL resolves nested data with type-specific resolvers.
- Resolving a one-to-many relationship (e.g., a User has many Posts).
- The parent argument in resolver functions.

### Example (Resolving posts for a user)

```javascript
const resolvers = {
  // ... Query and Mutation resolvers
  User: {
    // This resolver is for the 'posts' field on the User type
    posts: async (parent, args, { db }) => {
      const userId = parent.id; // The 'parent' is the User object resolved previously
      return await db.query('SELECT * FROM posts WHERE author_id = $1', [userId]);
    }
  }
};
```

### Practice Problem

Given the example above, write the resolver for the author field on the Post type. It should use the author_id from the parent (the post object) to fetch the correct user.
