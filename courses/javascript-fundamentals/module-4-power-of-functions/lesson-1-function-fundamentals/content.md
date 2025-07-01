### Lesson 4.1: Function Fundamentals
<p>A function is a reusable block of code. You define it with the <code class="prose-inline-code">function</code> keyword and call it by its name.</p>
<pre class="prose-code-block">// Function Declaration
function greet(name = "Guest") { // 'name' is a parameter with a default value
  console.log(`Hello, \${name}!`);
}

greet("Alice"); // "Alice" is an argument. Outputs: Hello, Alice!
greet();       // No argument provided. Outputs: Hello, Guest!</pre>
<p>The modern <strong>rest parameter</strong> syntax (<code class="prose-inline-code">...</code>) lets a function accept an indefinite number of arguments as an array.</p>
<pre class="prose-code-block">function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3); // 6</pre>
