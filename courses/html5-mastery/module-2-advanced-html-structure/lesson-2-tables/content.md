### Purpose of Tables
HTML tables are used to display tabular data, i.e., data arranged in rows and columns. They are **not** for layout purposes (use CSS Flexbox or Grid for layouts).

### Basic Table Structure (`<table>`, `<tr>`, `<th>`, `<td>`)

*   `<table>`: The container for the entire table.
*   `<tr>`: Table Row. Defines a row in the table.
*   `<th>`: Table Header. Defines a header cell (bold and centered by default).
*   `<td>`: Table Data. Defines a standard data cell.

**Detailed Example: Simple Table**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Basic Table</title>
    <style>
        table, th, td {
            border: 1px solid #ccc;
            border-collapse: collapse; /* Prevents double borders */
            padding: 8px;
            text-align: left;
        }
        table {
            width: 80%;
            margin: 20px auto;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Student Grades</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td>Alice</td>
            <td>Math</td>
            <td>A</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>Science</td>
            <td>B+</td>
        </tr>
        <tr>
            <td>Charlie</td>
            <td>History</td>
            <td>A-</td>
        </tr>
    </table>
</body>
</html>
```

### Table Sections (`<thead>`, `<tbody>`, `<tfoot>`)

These semantic elements help structure a table into header, body, and footer sections. They are especially useful for long tables, enabling scrolling bodies and fixed headers/footers.

*   `<thead>`: Table Header group.
*   `<tbody>`: Table Body group.
*   `<tfoot>`: Table Footer group.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Table Sections</title>
    <style>
        table, th, td { border: 1px solid #ccc; border-collapse: collapse; padding: 8px; }
        th { background-color: #eee; }
        tfoot { background-color: #ddd; font-weight: bold; }
        tbody tr:nth-child(even) { background-color: #f9f9f9; } /* Zebra striping */
    </style>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Apples</td>
                <td>5 kg</td>
                <td>$10.00</td>
            </tr>
            <tr>
                <td>Bananas</td>
                <td>3 kg</td>
                <td>$6.00</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2">Total</td>
                <td>$16.00</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

### Spanning Rows and Columns (`rowspan`, `colspan`)

*   `colspan` attribute: Specifies how many columns a cell should span.
*   `rowspan` attribute: Specifies how many rows a cell should span.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Table Spanning</title>
    <style>
        table, th, td { border: 1px solid #ccc; border-collapse: collapse; padding: 8px; text-align: center; }
        th { background-color: #f0f0f0; }
    </style>
</head>
<body>
    <h1>Complex Table Layout</h1>
    <table>
        <tr>
            <th rowspan="2">Category</th>
            <th colspan="2">Products</th>
        </tr>
        <tr>
            <th>Fruits</th>
            <th>Vegetables</th>
        </tr>
        <tr>
            <td>Organic</td>
            <td>Apples</td>
            <td>Spinach</td>
        </tr>
        <tr>
            <td>Conventional</td>
            <td>Bananas</td>
            <td>Carrots</td>
        </tr>
    </table>
</body>
</html>
```

### Table Caption (`<caption>`)

Provides a title or caption for the entire table. It should be the first child of the `<table>` element.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Table Caption</title>
    <style>
        table, th, td { border: 1px solid #ccc; border-collapse: collapse; padding: 8px; }
        caption { font-weight: bold; margin-bottom: 10px; font-size: 1.2em; }
    </style>
</head>
<body>
    <table>
        <caption>Monthly Sales Data</caption>
        <thead>
            <tr>
                <th>Month</th>
                <th>Sales</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>January</td><td>$5000</td></tr>
            <tr><td>February</td><td>$6500</td></tr>
        </tbody>
    </table>
</body>
</html>
```

### Exercise: Create a Product Price List

1.  Create an HTML table for a product price list.
2.  Include a table caption.
3.  Divide the table into `<thead>` and `<tbody>`.
4.  Use `<th>` for column headers like "Product Name", "Category", "Price", "Availability".
5.  Add at least 5 rows of sample product data using `<td>`.
6.  Use `rowspan` and/or `colspan` where it makes sense (e.g., if multiple products fall under the same "Category" or if you have a "Total" row).
7.  Add basic CSS to make the table look neat (borders, padding, background color for header).

### Helpful Links:

*   [MDN Web Docs: HTML Tables](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
*   [W3Schools HTML Tables](https://www.w3schools.com/html/html_tables.asp)
*   [Accessible Tables (WebAIM)](https://webaim.org/techniques/tables/)
