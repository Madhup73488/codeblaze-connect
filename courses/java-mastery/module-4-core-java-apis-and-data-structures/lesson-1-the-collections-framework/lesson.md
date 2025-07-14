---
title: "Lesson 1: The Collections Framework"
objective: "To use Java's powerful data structures for storing and manipulating groups of objects."
video: "https://www.google.com/search?q=https://www.youtube.com/embed/q27c2I1Jj6A"
---

### Topics

- List interface (ArrayList, LinkedList).
- Set interface (HashSet, TreeSet).
- Map interface (HashMap, TreeMap).
- Iterating over collections.

### Example (Using a List and a Map)

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");

Map<String, Integer> scores = new HashMap<>();
scores.put("Alice", 95);
scores.put("Bob", 88);

System.out.println(scores.get("Alice")); // Output: 95
```

### Practice Problem

Create a HashMap to store the prices of products, where the key is the product name (String) and the value is the price (Double). Add three products and then print the price of one of them.
