---
title: "Lesson 3: Setting Up a GraphQL Server"
objective: "To set up a basic, running GraphQL server using Node.js and Apollo Server."
video: "https://www.youtube.com/embed/yM_ihU2s9kI"
---

### Topics

- Setting up a Node.js project.
- Installing apollo-server and graphql.
- Defining a simple schema and resolvers.
- Starting the server and using the Apollo Sandbox.

### Example (A minimal Apollo Server)

```javascript
// index.js
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// 1. Define your schema
const typeDefs = \`#graphql
  type Query {
    hello: String
  }
\`;

// 2. Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

// 3. Create and start the server
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(\`🚀 Server ready at \${url}\`);
```

### Practice Problem

Follow the example to set up a new Apollo Server project. Modify the schema and resolvers to add a new query called greeting that returns "Welcome to GraphQL!". Test it in the Apollo Sandbox.
