---
title: "Lesson 2: Introduction to Serverless with AWS Lambda"
objective: "To understand the serverless paradigm and run code without provisioning or managing servers."
video: "https://www.youtube.com/embed/eGA2d-3t_gA"
---

### Topics

- What is Serverless?
- AWS Lambda: Running code in response to events.
- Supported runtimes (Node.js, Python, etc.).
- Lambda Triggers (e.g., API Gateway, S3 events, DynamoDB streams).
- Lambda pricing model (pay per execution and duration).

### Example (A simple Lambda function in Node.js)

```javascript
exports.handler = async (event) => {
  console.log("Event: ", event);
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
```

### Practice Problem

Create a simple Lambda function that takes a name from the event object and returns a greeting, "Hello, [name]!". Test it using the Lambda console.
