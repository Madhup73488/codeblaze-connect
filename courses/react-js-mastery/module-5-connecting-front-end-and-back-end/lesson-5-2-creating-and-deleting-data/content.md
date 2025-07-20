
In this lesson, you'll learn how to create and delete data on the backend from a React frontend.

## Creating Data (POST Request)

To create new data, you'll need to make a `POST` request to your API.

```javascript
const createItem = async (item) => {
  const response = await fetch('/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });
  const data = await response.json();
  return data;
};
```

## Deleting Data (DELETE Request)

To delete data, you'll need to make a `DELETE` request to your API, usually with the ID of the item to delete in the URL.

```javascript
const deleteItem = async (id) => {
  const response = await fetch(`/api/items/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};
