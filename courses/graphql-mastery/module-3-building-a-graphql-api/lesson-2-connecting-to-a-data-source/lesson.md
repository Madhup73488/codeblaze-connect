---
title: "Lesson 2: Connecting to a Data Source"
objective: "To connect your resolvers to a real data source, like a database or a REST API."
video: "https://www.youtube.com/embed/Q4_90qtrh3I"
---

### Topics

- The context argument for sharing database connections or user authentication info.
- Fetching data from a SQL database (e.g., PostgreSQL with node-postgres).
- Fetching data from a REST API.

### Example (Using context to pass a database client)

```javascript
// In server setup
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
  context: async () => ({
    db: myDatabaseClient, // Pass the DB client to all resolvers
  }),
});

// In a resolver
const resolvers = {
  Query: {
    post: async (parent, { id }, { db }) => {
      // Use the db client from context
      return await db.query('SELECT * FROM posts WHERE id = $1', [id]);
    },
  },
};
```

### Practice Problem

Imagine you have a users array acting as an in-memory database. Pass this array in the context and rewrite your user(id: ID!) resolver to find and return the correct user from the array.
