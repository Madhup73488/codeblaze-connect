### Lesson 2.4: Operators: Performing Actions
<p>Operators are symbols that perform operations on values (operands).</p>

<h4>Arithmetic Operators</h4>
<p>Perform standard math: <code class="prose-inline-code">+</code>, <code class="prose-inline-code">-</code>, <code class="prose-inline-code">*</code>, <code class="prose-inline-code">/</code>, <code class="prose-inline-code">%</code> (remainder), <code class="prose-inline-code">**</code> (exponent).</p>
<p><strong>Common Pitfall:</strong> The <code class="prose-inline-code">+</code> operator performs string concatenation if either operand is a string.</p>
<pre class="prose-code-block">'5' + 3; // "53" (a string), not 8
// To ensure addition, convert the string to a number first
Number('5') + 3; // 8</pre>

<h4>Comparison Operators</h4>
<p>Compare values and return a boolean (<code class="prose-inline-code">true</code> or <code class="prose-inline-code">false</code>).</p>
<p><strong>Best Practice:</strong> Always use <strong>strict equality (<code class="prose-inline-code">===</code>)</strong> and <strong>strict inequality (<code class="prose-inline-code">!==</code>)</strong>. These compare both value and type without performing unpredictable type coercion.</p>
<ul class="list-disc list-inside my-4">
    <li><code class="prose-inline-code">5 === '5'</code> is <strong>false</strong> (checks type and value).</li>
    <li><code class="prose-inline-code">5 == '5'</code> is <strong>true</strong> (loose equality converts type before checking).</li>
</ul>

<h4>Logical Operators</h4>
<p>Combine boolean values: <code class="prose-inline-code">&&</code> (AND), <code class="prose-inline-code">||</code> (OR), <code class="prose-inline-code">!</code> (NOT).</p>
<p>These operators use "short-circuiting". For example, in <code class="prose-inline-code">A && B</code>, if A is false, B is never evaluated.</p>

<h5>Example Problem: Operator Precedence</h5>
<p><strong>Problem:</strong> What is the value of <code class="prose-inline-code">result</code>?</p>
<pre class="prose-code-block">const result = 10 + 5 * 2 ** 2 / 2 - 3;</pre>
<p><strong>Solution:</strong> <code class="prose-inline-code">17</code>. The order of operations is:</p>
<ol class="list-decimal list-inside">
    <li>Exponent: <code class="prose-inline-code">2 ** 2</code> is 4.</li>
    <li>Multiplication: <code class="prose-inline-code">5 * 4</code> is 20.</li>
    <li>Division: <code class="prose-inline-code">20 / 2</code> is 10.</li>
    <li>Addition: <code class="prose-inline-code">10 + 10</code> is 20.</li>
    <li>Subtraction: <code class="prose-inline-code">20 - 3</code> is 17.</li>
</ol>
