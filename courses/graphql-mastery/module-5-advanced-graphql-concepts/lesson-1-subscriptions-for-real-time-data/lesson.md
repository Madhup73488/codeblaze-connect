---
title: "Lesson 1: Subscriptions for Real-time Data"
objective: "To push data from the server to the client in real-time using GraphQL Subscriptions."
video: "https://www.youtube.com/embed/hSotH33iY-s"
---

### Topics

- The Subscription type in the schema.
- Setting up a WebSocket server for subscriptions.
- Using PubSub for publishing events.
- The useSubscription hook on the client.

### Example (A subscription for new comments)

```graphql
type Subscription {
  commentAdded(postId: ID!): Comment
}
```

### Practice Problem

Conceptually, how would you implement a "user is typing" indicator for a chat application using a GraphQL subscription? What event would the server publish, and what data would the subscription return?
