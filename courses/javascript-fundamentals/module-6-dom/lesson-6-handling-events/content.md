### Lesson 6.6: Handling Events
<p>Events are actions that happen in the browser, like clicks, key presses, or form submissions. You can "listen" for these events and run code in response.</p>
<p>The standard method is <code class="prose-inline-code">.addEventListener()</code>.</p>
<pre class="prose-code-block">const button = document.querySelector('#myButton');

button.addEventListener('click', function(event) {
  console.log('Button was clicked!');
  // The 'event' object contains useful info about the event
  console.log(event.target); // The element that was clicked
});</pre>
<p>To prevent a default browser action (like a form submitting and reloading the page), use <code class="prose-inline-code">event.preventDefault()</code>.</p>
<pre class="prose-code-block">const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log("Form submission handled by JS.");
});</pre>
