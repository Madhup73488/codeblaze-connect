---
title: "Lesson 2: Introduction to Apollo Client for React"
objective: "To set up Apollo Client in a React application to handle data fetching, caching, and state management."
video: "https://www.youtube.com/embed/dKz-I8-y5iA"
---

### Topics

- Setting up the ApolloProvider and ApolloClient.
- The useQuery hook for fetching data.
- Handling loading and error states.
- The useMutation hook for modifying data.

### Example (Using the useQuery hook)

```javascript
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql\`
  query GetPosts {
    posts {
      id
      title
    }
  }
\`;

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}
```

### Practice Problem

Set up a new React project with Apollo Client. Use the useQuery hook to fetch and display the result of the hello query from the server you built in Module 1.
