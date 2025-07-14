---
title: "Lesson 3: Security Best Practices"
objective: "To secure your GraphQL API from common vulnerabilities."
video: "https://www.youtube.com/embed/S6Y0C2a24A8"
---

### Topics

- Authentication (who is the user?).
- Authorization (what is this user allowed to do?).
- Implementing authorization logic in resolvers or business logic layers.
- Preventing query complexity/depth attacks.

### Example (Authorization in a resolver)

```javascript
const resolvers = {
  Mutation: {
    deletePost: async (parent, { id }, { db, user }) => {
      const post = await db.getPostById(id);
      // Check if the authenticated user (from context) is the post's author
      if (post.authorId !== user.id) {
        throw new Error('Not authorized to delete this post.');
      }
      // ... proceed with deletion
    }
  }
};
```

### Practice Problem

Why is it a bad idea to simply hide a "delete" button in the UI for users who aren't authorized? Why must authorization checks always happen on the server?
