

In this lesson, you'll learn how to create dynamic and nested routes with React Router.

## Dynamic Routes

Dynamic routes are useful when you have a collection of items and you want to create a page for each item. For example, you might have a list of products, and you want to create a page for each product.

You can create a dynamic route by adding a colon to the path.

```javascript
<Route path="/products/:id" element={<Product />} />
```

In the `Product` component, you can access the `id` parameter using the `useParams` hook.

```javascript
import { useParams } from "react-router-dom";

function Product() {
  let { id } = useParams();
  // ...
}
```

## Nested Routes

Nested routes are useful when you have a component that needs to render different content based on the URL. For example, you might have a dashboard with different sections.

You can create nested routes by nesting `Route` components.

```javascript
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

In the `Dashboard` component, you need to render an `Outlet` component. The `Outlet` component will render the content of the nested route.

```javascript
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
