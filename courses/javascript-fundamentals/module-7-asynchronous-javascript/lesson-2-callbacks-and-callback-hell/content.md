### Lesson 7.2: Callbacks and "Callback Hell"
<p>The original pattern for async code was <strong>callbacks</strong>: passing a function to another function to be executed later. When you need to do multiple async operations in sequence, this leads to deeply nested code called "Callback Hell" or the "Pyramid of Doom." It's hard to read and maintain.</p>
<pre class="prose-code-block">first(result1 => {
  second(result1, result2 => {
    third(result2, result3 => {
      // ... and so on
    });
  });
});</pre>
