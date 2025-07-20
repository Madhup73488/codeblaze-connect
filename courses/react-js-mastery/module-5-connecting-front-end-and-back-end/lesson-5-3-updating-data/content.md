# Lesson 5.3: Updating Data

In this lesson, you'll learn how to update data on the backend from a React frontend.

## Updating Data (PUT/PATCH Request)

To update existing data, you'll need to make a `PUT` or `PATCH` request to your API, usually with the ID of the item to update in the URL.

-   `PUT`: Replaces the entire resource with the new data.
-   `PATCH`: Partially updates the resource with the new data.

```javascript
const updateItem = async (id, item) => {
  const response = await fetch(`/api/items/${id}`, {
    method: 'PUT', // or 'PATCH'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};
