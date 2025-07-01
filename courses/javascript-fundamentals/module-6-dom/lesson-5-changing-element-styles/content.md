### Lesson 6.5: Changing Element Styles
<p>The best way to change styles is by adding or removing CSS classes. This separates your styling (CSS) from your logic (JS).</p>
<pre class="prose-code-block">// In your CSS file:
// .highlight { background-color: yellow; }

// In your JS file:
const element = document.querySelector('.my-element');
element.classList.add('highlight');
element.classList.remove('highlight');
element.classList.toggle('highlight'); // Adds if not present, removes if present</pre>
<p>You can also change inline styles directly via the <code class="prose-inline-code">.style</code> property, but this is less maintainable for complex styling.</p>
<pre class="prose-code-block">element.style.color = 'blue';
element.style.backgroundColor = 'lightgray'; // note camelCase</pre>
