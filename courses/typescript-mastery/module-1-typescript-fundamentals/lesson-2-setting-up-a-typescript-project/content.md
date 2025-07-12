<iframe width="560" height="315" src="https://www.youtube.com/embed/LKVim_a_I_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To initialize a new TypeScript project and understand the role of the compiler and its configuration.

**Topics:**

*   Installing TypeScript globally (`npm install -g typescript`).
*   Initializing a project (`npm init -y` and `tsc --init`).
*   The `tsconfig.json` file: what it is and key options (`target`, `module`, `strict`, `outDir`).
*   Compiling TypeScript (`.ts`) to JavaScript (`.js`) using the `tsc` command.

**Example (tsconfig.json basic setup):**

```json
{
  "compilerOptions": {
    "target": "es2016", // Compile down to ES2016 JavaScript
    "module": "commonjs", // Use CommonJS modules
    "strict": true, // Enable all strict type-checking options
    "esModuleInterop": true // Allows for better interoperability between module systems
  }
}
```

**Practice Problem:**
Create a new project folder, initialize it as an npm project, and then add a `tsconfig.json` file. Create a simple `index.ts` file that contains `console.log("Hello, TypeScript!");` and compile it to JavaScript using the `tsc` command.
