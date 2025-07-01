### Lesson 3.1: Conditional Statements: `if`, `else if`, `else`
<p>Conditionals execute code based on whether a condition is true or false.</p>
<pre class="prose-code-block">let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}
</pre>
<p>JavaScript also has the concept of <strong>truthy</strong> and <strong>falsy</strong> values. Values like <code class="prose-inline-code">0</code>, <code class="prose-inline-code">""</code> (empty string), <code class="prose-inline-code">null</code>, <code class="prose-inline-code">undefined</code>, and <code class="prose-inline-code">NaN</code> are treated as <code class="prose-inline-code">false</code> in conditionals. All other values are truthy.</p>
