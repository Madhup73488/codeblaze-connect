### Lesson 2.3: Data Types: The Kinds of Values
<p>JavaScript is a <strong>dynamically typed</strong> language, meaning a variable's type is determined at runtime based on the value assigned to it. Data types are split into two categories: Primitives and Objects.</p>

<h4>Primitive Types (Immutable)</h4>
<p>Primitives are the most basic data types. They are immutable, meaning their value cannot be changed once created.</p>
<ul class="list-disc list-inside space-y-2 my-4">
    <li><strong>String:</strong> Text, e.g., <code class="prose-inline-code">"hello"</code> or <code class="prose-inline-code">'world'</code>. Template literals (using backticks ``) are powerful for embedding variables: <code class="prose-inline-code">`Your score is \${score}`</code>.</li>
    <li><strong>Number:</strong> Both integers and decimals, e.g., <code class="prose-inline-code">42</code> or <code class="prose-inline-code">3.14</code>. Includes special values like <code class="prose-inline-code">Infinity</code> and <code class="prose-inline-code">NaN</code> (Not-a-Number).</li>
    <li><strong>Boolean:</strong> Logical values, can only be <code class="prose-inline-code">true</code> or <code class="prose-inline-code">false</code>.</li>
    <li><strong>undefined:</strong> A variable that has been declared but not assigned a value has the type and value <code class="prose-inline-code">undefined</code>.</li>
    <li><strong>null:</strong> Represents the intentional absence of any object value. It's an assignment value, meaning a developer explicitly sets it.</li>
    <li><strong>BigInt:</strong> For integers larger than the standard <code class="prose-inline-code">Number</code> type can safely represent. Created by adding 'n' to the end: <code class="prose-inline-code">9007199254740991n</code>.</li>
    <li><strong>Symbol:</strong> A unique and immutable primitive, often used as a unique key for object properties.</li>
</ul>

<h4>Object Type (Mutable)</h4>
<p>The only non-primitive type. Objects are mutable collections of key-value pairs. Arrays and Functions are special types of objects.</p>
<pre class="prose-code-block">let person = { name: "Alice", age: 30 };</pre>

<h5>The `typeof` Operator</h5>
<p>Use the <code class="prose-inline-code">typeof</code> operator to check the type of a value.</p>
<pre class="prose-code-block">typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof {a: 1};      // "object"
typeof null;        // "object" (This is a famous, long-standing bug in JS)</pre>
