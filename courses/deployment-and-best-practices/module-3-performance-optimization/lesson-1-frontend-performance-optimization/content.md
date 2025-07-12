
<iframe width="560" height="315" src="https://www.youtube.com/embed/CaShN6mCJB0?si=H1UPoLE8cd0BUJpi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Objective:** To improve the loading speed and responsiveness of the React application.

**Topics:**

*   Code Splitting (`React.lazy`), Bundle Size Analysis, Image Optimization, `React.memo`

**Example (Code Splitting with React.lazy):**

```javascript
import React, { Suspense } from 'react';

const AdminDashboard = React.lazy(() => import('./components/AdminDashboard'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminDashboard />
      </Suspense>
    </div>
  );
}
```

**Practice Problem:**
You have a component that re-renders every time its parent component re-renders, even though its props have not changed. Which React API could you use to prevent these unnecessary re-renders? Provide a code example.
