### Lesson 7.1: Introduction to Asynchronous Code
<p>JavaScript is <strong>single-threaded</strong>, meaning it does one thing at a time. If a task takes a long time (like a network request), it would <strong>block</strong> the main thread, freezing the UI. <strong>Asynchronous</strong> code allows us to start a long-running task and move on to other things. When the task finishes, our code handles the result.</p>
<p>This is handled by the browser's runtime environment through the <strong>Event Loop</strong>.</p>
