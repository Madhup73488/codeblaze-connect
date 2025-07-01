### Unordered Lists (`<ul>` and `<li>`)

Used for lists of items where the order does not matter (e.g., a list of features, ingredients).

Items are typically displayed with bullet points.

*   `<ul>`: Unordered List container.
*   `<li>`: List Item.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Unordered Lists</title>
</head>
<body>
    <h1>My Favorite Hobbies</h1>
    <ul>
        <li>Reading</li>
        <li>Hiking</li>
        <li>Coding</li>
        <li>Photography</li>
    </ul>
    <h2>Shopping List</h2>
    <ul>
        <li>Milk</li>
        <li>Eggs</li>
        <li>Bread</li>
    </ul>
</body>
</html>
```

### Ordered Lists (`<ol>` and `<li>`)

Used for lists of items where the order **does** matter (e.g., steps in a recipe, top 10 rankings).

Items are typically displayed with numbers or letters.

*   `<ol>`: Ordered List container.
*   `<li>`: List Item.

**Attributes:**
*   `type`: Specifies the type of marker (`1` for numbers, `a` for lowercase letters, `A` for uppercase letters, `i` for lowercase Roman numerals, `I` for uppercase Roman numerals).
*   `start`: Specifies the start value of the numbering.
*   `reversed`: Specifies that the list order should be descending.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ordered Lists</title>
</head>
<body>
    <h1>Steps to Make Coffee</h1>
    <ol>
        <li>Boil water.</li>
        <li>Add coffee grounds to filter.</li>
        <li>Pour hot water over grounds.</li>
        <li>Enjoy your coffee!</li>
    </ol>

    <h2>Top 3 Countries by Area</h2>
    <ol type="1" start="1"> <!-- Default, but explicitly set -->
        <li>Russia</li>
        <li>Canada</li>
        <li>China</li>
    </ol>

    <h2>Countdown (Reversed)</h2>
    <ol type="I" start="5" reversed>
        <li>Five</li>
        <li>Four</li>
        <li>Three</li>
        <li>Two</li>
        <li>One</li>
    </ol>
</body>
</html>
```

### Definition Lists (`<dl>`, `<dt>`, `<dd>`)

Used to define a list of terms and their descriptions.

*   `<dl>`: Definition List container.
*   `<dt>`: Definition Term.
*   `<dd>`: Definition Description (indents by default).

**Use cases:** Glossaries, FAQs, metadata lists.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Definition Lists</title>
</head>
<body>
    <h1>Glossary of Web Terms</h1>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language. The standard markup language for creating web pages.</dd>

        <dt>CSS</dt>
        <dd>Cascading Style Sheets. A stylesheet language used to describe the presentation of a document written in HTML.</dd>

        <dt>JavaScript</dt>
        <dd>A programming language that enables interactive web pages.</dd>
    </dl>
</body>
</html>
```

### Nesting Lists
You can embed lists within other list items.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Nested Lists</title>
</head>
<body>
    <h1>My Travel Plans</h1>
    <ul>
        <li>Asia
            <ul>
                <li>Japan
                    <ol>
                        <li>Tokyo</li>
                        <li>Kyoto</li>
                    </ol>
                </li>
                <li>Thailand</li>
            </ul>
        </li>
        <li>Europe
            <ul>
                <li>France</li>
                <li>Italy</li>
            </ul>
        </li>
    </ul>
</body>
</html>
```

### Exercise: Create a Recipe Page

1.  Create an HTML file `recipe.html`.
2.  Add a heading (`<h1>`) for the recipe title.
3.  Create an unordered list (`<ul>`) for the ingredients.
4.  Create an ordered list (`<ol>`) for the step-by-step instructions.
5.  Include a definition list (`<dl>`) for nutritional information or a brief glossary of cooking terms.
6.  Nest a small unordered list within one of the ordered list steps (e.g., "Add toppings:
    *   Cheese
    *   Peppers
    *   Onions").

### Helpful Links:

*   [MDN Web Docs: HTML Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
*   [W3Schools HTML Lists](https://www.w3schools.com/html/html_lists.asp)
