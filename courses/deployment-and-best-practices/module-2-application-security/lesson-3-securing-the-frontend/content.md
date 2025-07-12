<iframe width="560" height="315" src="https://www.youtube.com/embed/T3pr4WjSAOQ?si=bAO2K8QSx9L9yu7O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Objective:** To implement security measures on the client-side to protect users.

**Topics:**

*   Preventing XSS, `DOMPurify`, Secure Token Storage, Protected Routes, CSP

**Example (Using DOMPurify):**

```javascript
import DOMPurify from 'dompurify';

const UserBio = ({ bioHTML }) => {
  const cleanHTML = DOMPurify.sanitize(bioHTML);
  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
};
```

**Practice Problem:**
Describe two different methods for storing a JWT on the client-side. What are the security pros and cons of each method?
