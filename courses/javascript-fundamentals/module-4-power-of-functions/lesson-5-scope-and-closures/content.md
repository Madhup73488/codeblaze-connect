### Lesson 4.5: Understanding Scope and Closures
<h4>Scope</h4>
<p>Scope determines the accessibility of variables. Modern JavaScript uses <strong>block scope</strong> (<code class="prose-inline-code">let</code>, <code class="prose-inline-code">const</code>), where variables exist only within the <code class="prose-inline-code">{}</code> they are defined in.</p>
<h4>Closures</h4>
<p>A closure is a fundamental concept where an inner function has access to its outer function's variables, even after the outer function has finished executing.</p>
<pre class="prose-code-block">function makeAdder(x) {
  // The inner function "closes over" the variable x
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5); // This function remembers that x is 5
console.log(add5(2)); // Outputs: 7</pre>
