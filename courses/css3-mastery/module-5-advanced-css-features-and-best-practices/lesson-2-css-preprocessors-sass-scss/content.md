### What are Preprocessors?
Tools that let you write CSS with extra features like variables, functions, and nesting. The preprocessor then compiles your code into regular CSS that browsers can understand.

### Introduction to Sass/SCSS
The most popular preprocessor. SCSS is a superset of CSS, so all valid CSS is also valid SCSS.

### Key Features with Detailed Examples
#### Variables (`$`)
Store reusable values.

**SCSS:**
```scss
$primary-color: #3498db;
$font-stack: 'Lato', sans-serif;
$border-radius: 5px;

body {
  font-family: $font-stack;
  background-color: lighten($primary-color, 40%);
}
.button {
  background-color: $primary-color;
  border-radius: $border-radius;
}
```
**Compiled CSS:**
```css
body {
  font-family: 'Lato', sans-serif;
  background-color: #d1e8f8;
}
.button {
  background-color: #3498db;
  border-radius: 5px;
}
```
#### Nesting
Nest selectors to reflect your HTML structure.

**SCSS:**
```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      a {
        padding: 15px;
        text-decoration: none;
        &:hover { /* The '&' refers to the parent selector (a) */
          background-color: darken($primary-color, 10%);
        }
      }
    }
  }
}
```
**Compiled CSS:**
```css
nav ul {
  margin: 0;
  padding: 0;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  padding: 15px;
  text-decoration: none;
}
nav ul li a:hover {
  background-color: #24689d;
}
```
#### Mixins (`@mixin`, `@include`)
Create reusable blocks of CSS.

**SCSS:**
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-wrapper {
  @include flex-center;
  height: 100vh;
}
```
**Compiled CSS:**
```css
.container-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```
### Setting up Sass
Briefly explain installation via npm (`npm install -g sass`) and compiling from the command line (`sass input.scss output.css`).

### Exercise: Refactor a Stylesheet to SCSS
1.  Take the CSS from your Responsive Card Grid exercise.
2.  Convert the file to SCSS (`.scss`).
3.  Create variables for colors, spacing, and breakpoints.
4.  Use nesting to organize the CSS for the `.card-container` and `.card`.
5.  Create a mixin for a common style (e.g., `box-shadow`) and include it.
6.  Compile your SCSS file to CSS and check the output.

### Helpful Links:
*   [Sass Official Website](https://sass-lang.com/)
*   [MDN Web Docs: Using Sass](https://developer.mozilla.org/en-US/docs/Glossary/Sass)
