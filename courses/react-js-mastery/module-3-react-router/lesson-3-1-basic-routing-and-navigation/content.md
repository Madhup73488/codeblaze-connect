
In this lesson, you'll learn how to set up basic routing and navigation in a React application using React Router.

## Installation

First, you need to add React Router to your project.

```bash
npm install react-router-dom
```

## Basic Routing

To set up routing, you need to wrap your application in a `BrowserRouter` component. Then, you can use the `Routes` and `Route` components to define your routes.

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
```

## Navigation

To navigate between pages, you can use the `Link` component.

```javascript
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
