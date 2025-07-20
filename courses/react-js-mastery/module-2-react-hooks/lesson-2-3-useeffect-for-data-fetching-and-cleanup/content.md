

In this lesson, you'll learn how to use the `useEffect` hook to fetch data from an API and perform cleanup.

## Data Fetching

You can use `useEffect` to fetch data from an API when a component mounts.

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // The empty array means this effect runs once on mount

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}
```

## Cleanup

Sometimes, you need to clean up resources when a component unmounts. For example, you might need to cancel a network request or remove an event listener.

You can do this by returning a function from your `useEffect` hook.

```javascript
useEffect(() => {
  const subscription = someApi.subscribe();

  return () => {
    subscription.unsubscribe();
  };
}, []);
