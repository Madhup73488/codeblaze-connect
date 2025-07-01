### Module 2: Exercises & Problems
<div class="exercise-section">
    <h5>Exercise 1: Temperature Converter</h5>
    <p><strong>Task:</strong></p>
    <ol class="list-decimal list-inside space-y-2 my-2">
        <li>Declare a constant variable <code class="prose-inline-code">celsius</code> and assign it a number value.</li>
        <li>Create a formula to convert this temperature to Fahrenheit and store the result in a <code class="prose-inline-code">let</code> variable named <code class="prose-inline-code">fahrenheit</code>. The formula is <code class="prose-inline-code">F = C * 9/5 + 32</code>.</li>
        <li>Log the result to the console in a descriptive string, e.g., "30°C is 86°F".</li>
    </ol>
</div>

<div class="exercise-section">
    <h5>Exercise 2: Type Prediction</h5>
    <p><strong>Task:</strong> For each of the following expressions, predict the data type of the result without running the code.</p>
    <ol class="list-decimal list-inside space-y-2 my-2">
        <li><code class="prose-inline-code">10 + "20"</code></li>
        <li><code class="prose-inline-code">"20" - 10</code> (Hint: Subtraction tries to convert to numbers)</li>
        <li><code class="prose-inline-code">!!""</code> (Hint: The first ! converts to boolean and negates, the second negates again)</li>
        <li><code class="prose-inline-code">5 > 3 && 10 === '10'</code></li>
        <li><code class="prose-inline-code">null + 10</code></li>
    </ol>
    <p><strong>Answers:</strong> string, number, boolean, boolean, number.</p>
</div>

<div class="exercise-section">
    <h5>Exercise 3: Swap Two Variables</h5>
    <p><strong>Task:</strong> Declare two variables, <code class="prose-inline-code">a</code> and <code class="prose-inline-code">b</code>, with initial values. Write code to swap their values. For example, if <code class="prose-inline-code">a</code> is 5 and <code class="prose-inline-code">b</code> is 10, after your code, <code class="prose-inline-code">a</code> should be 10 and <code class="prose-inline-code">b</code> should be 5.</p>
    <p><strong>Solution using a temporary variable:</strong></p>
    <pre class="prose-code-block">let a = 5;
let b = 10;
console.log(`Before: a = \${a}, b = \${b}`);

const temp = a; // Store original value of a
a = b;
b = temp;

console.log(`After: a = \${a}, b = \${b}`);</pre>
</div>
