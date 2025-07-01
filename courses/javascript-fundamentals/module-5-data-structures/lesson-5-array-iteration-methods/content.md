### Lesson 5.5: Array Iteration Methods
<p>Modern array methods provide clean, functional ways to iterate over arrays without traditional <code class="prose-inline-code">for</code> loops.</p>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><code class="prose-inline-code">forEach(callback)</code>: Executes a function for each element.</li>
    <li><code class="prose-inline-code">map(callback)</code>: Creates a <strong>new array</strong> with the results of calling the callback on every element.</li>
    <li><code class="prose-inline-code">filter(callback)</code>: Creates a <strong>new array</strong> with all elements that pass the test in the callback.</li>
    <li><code class="prose-inline-code">find(callback)</code>: Returns the <strong>first element</strong> that passes the test.</li>
    <li><code class="prose-inline-code">reduce(callback, initialValue)</code>: Reduces the array to a single value.</li>
</ul>
<pre class="prose-code-block">const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const sum = numbers.reduce((total, n) => total + n, 0); // 10</pre>
