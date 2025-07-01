### Module 3: Exercises & Problems
<div class="exercise-section">
    <h5>Exercise 1: FizzBuzz</h5>
    <p><strong>Task:</strong> Write a program that uses a <code class="prose-inline-code">for</code> loop to print the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".</p>
    <p><strong>Hint:</strong> Use the modulo operator (<code class="prose-inline-code">%</code>) to check for divisibility. The order of your <code class="prose-inline-code">if/else if</code> checks matters.</p>
</div>

<div class="exercise-section">
    <h5>Exercise 2: Grade Calculator</h5>
    <p><strong>Task:</strong> Write a program that assigns a letter grade based on a numerical score.</p>
    <ol class="list-decimal list-inside space-y-2 my-2">
        <li>Declare a variable <code class="prose-inline-code">score</code> with a value between 0 and 100.</li>
        <li>Use an <code class="prose-inline-code">if...else if...else</code> chain to determine the grade:
            <ul class="list-disc list-inside ml-4">
                <li>90-100: "A"</li>
                <li>80-89: "B"</li>
                <li>70-79: "C"</li>
                <li>60-69: "D"</li>
                <li>Below 60: "F"</li>
            </ul>
        </li>
        <li>Log the corresponding letter grade to the console.</li>
    </ol>
</div>

<div class="exercise-section">
    <h5>Exercise 3: Find the First Odd Number</h5>
    <p><strong>Task:</strong> Given an array of numbers, e.g., <code class="prose-inline-code">const numbers = [2, 4, 6, 8, 9, 10];</code>, write a loop that finds the first odd number. Once the number is found, log it to the console and stop the loop immediately.</p>
    <p><strong>Hint:</strong> Use a <code class="prose-inline-code">for...of</code> loop and the <code class="prose-inline-code">break</code> statement.</p>
</div>
