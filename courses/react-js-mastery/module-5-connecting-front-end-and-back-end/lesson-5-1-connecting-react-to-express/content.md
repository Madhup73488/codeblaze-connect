
In this lesson, you'll learn how to make HTTP requests from a React frontend to a Node.js/Express backend.

## Making HTTP Requests

You can use the built-in `fetch` API or a library like `axios` to make HTTP requests from your React components.

### Using `fetch`

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}
```

### Using `axios`

First, you need to install `axios`.

```bash
npm install axios
```

Then, you can use it in your components.

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => setData(response.data));
  }, []);

  return (
    <div>
      {data ? <p>Data: {data}</p> : <p>Loading...</p>}
    </div>
  );
}
```

## CORS

Cross-Origin Resource Sharing (CORS) is a mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

You'll need to enable CORS on your Express server to allow requests from your React frontend.

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// ...
