### Lesson 4.2: Return Values
<p>Functions often compute a value and send it back using the <code class="prose-inline-code">return</code> keyword. When <code class="prose-inline-code">return</code> is executed, the function stops immediately.</p>
<pre class="prose-code-block">function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(10, 5); // area is now 50</pre>
<p>If a function has no <code class="prose-inline-code">return</code> statement, it implicitly returns <code class="prose-inline-code">undefined</code>.</p>
