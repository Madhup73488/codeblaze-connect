### Module 4: Exercises & Problems
<div class="exercise-section">
    <h5>Exercise 1: Max of Two Numbers</h5>
    <p><strong>Task:</strong> Write a function named <code class="prose-inline-code">max</code> that takes two numbers as arguments and returns the larger of the two. Use a function declaration for this.</p>
</div>

<div class="exercise-section">
    <h5>Exercise 2: Capitalize a String</h5>
    <p><strong>Task:</strong> Write a function expression named <code class="prose-inline-code">capitalize</code> that takes a string as an argument. It should return the string with the first letter capitalized and the rest of the letters in lowercase. For example, <code class="prose-inline-code">capitalize("jAVAsCRIPT")</code> should return "Javascript".</p>
    <p><strong>Hint:</strong> Look up the <code class="prose-inline-code">.toUpperCase()</code>, <code class="prose-inline-code">.toLowerCase()</code>, and <code class="prose-inline-code">.slice()</code> string methods.</p>
</div>

<div class="exercise-section">
    <h5>Exercise 3: Simple Counter with Closure</h5>
    <p><strong>Task:</strong> Write a function named <code class="prose-inline-code">createCounter</code> that doesn't take any arguments. It should declare a local variable <code class="prose-inline-code">count</code> initialized to 0. It should then return another function. Each time the returned function is called, it should increment the <code class="prose-inline-code">count</code> and return the new value. This demonstrates a closure.</p>
    <pre class="prose-code-block">// How it should work:
const counterA = createCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2

const counterB = createCounter();
console.log(counterB()); // 1 (a separate counter)</pre>
</div>
