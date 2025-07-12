<iframe width="560" height="315" src="https://www.youtube.com/embed/wUaeKEl1RCw?si=3K-gSTxEBXArKwhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Objective:** To identify and understand the most common security threats to a web application.

**Topics:**

*   OWASP Top 10
*   XSS, SQL/NoSQL Injection, CSRF

**Example (Reflected XSS Vulnerability):**
An attacker could trick a user into visiting a URL like: `http://yourapp.com/search?query=<script>alert('XSS')</script>`. If the search term is rendered directly into the HTML without sanitization, the script will execute.

**Practice Problem:**
Explain the difference between a Stored XSS attack and a Reflected XSS attack. Which one is generally more dangerous and why?
