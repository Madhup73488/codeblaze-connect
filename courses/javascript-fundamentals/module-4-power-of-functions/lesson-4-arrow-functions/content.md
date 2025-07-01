### Lesson 4.4: Arrow Functions (`=>`)
<p>Arrow functions offer a more concise syntax for function expressions. They are especially useful for callbacks.</p>
<pre class="prose-code-block">// Traditional Function Expression
const square_trad = function(x) {
  return x * x;
};

// Arrow Function
const square_arrow = (x) => x * x;</pre>
<p>A key difference is that arrow functions do not have their own <code class="prose-inline-code">this</code> keyword. They inherit <code class="prose-inline-code">this</code> from their surrounding scope, which solves many common bugs.</p>
