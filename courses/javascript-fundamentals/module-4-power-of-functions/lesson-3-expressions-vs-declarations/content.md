### Lesson 4.3: Function Expressions vs. Declarations
<p>There are two main ways to create functions:</p>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><strong>Function Declaration:</strong> A standalone statement. It is fully <strong>hoisted</strong>, meaning you can call it before it's defined in the code.</li>
    <li><strong>Function Expression:</strong> A function created as part of an expression, often assigned to a variable. It is not hoisted.</li>
</ul>
<pre class="prose-code-block">// Declaration (hoisted)
function sayHi() { console.log("Hi!"); }

// Expression (not hoisted)
const sayHello = function() { console.log("Hello!"); };</pre>
