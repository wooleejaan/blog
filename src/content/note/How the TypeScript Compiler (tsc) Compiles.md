---
title: 'How the TypeScript Compiler (tsc) Compiles'
description: 'The TypeScript compilation process'
pubDate: 'Apr 21 2024'
---

#### Converting TypeScript Files to JavaScript Files

The TypeScript compiler (tsc) begins by reading the tsconfig.json file to determine the project's compile options and the list of files to be included in the compilation (configured through exclude, include, files, etc.).

In the Pre-process Files stage, tsc constructs a dependency graph of all ts files based on import and export statements. This step determines the actual list of files to be compiled.

During the Tokenize and Parse stage, the source code is broken down into its smallest units, called tokens, and an Abstract Syntax Tree (AST) is created from these tokens. This stage also includes an initial check for syntax errors.

- The scanner converts code strings into tokens, and the parser uses these tokens to build the AST.

In the Binding stage, tsc's [binder](https://github.com/microsoft/TypeScript/blob/main/src/compiler/binder.ts) generates Symbols (for variables, functions, classes, etc.) for each node in the AST, establishing Scope and Symbol information.

- This stage involves converting identifiers to symbols.
- During data collection, flow containers are created based on flow conditions, storing node types.

In the Type Checking stage, tsc's [checker](https://github.com/microsoft/TypeScript/blob/main/src/compiler/checker.ts) uses the Symbols and AST to perform type checks.

In the Emitting stage, tsc's [emitter](https://github.com/microsoft/TypeScript/blob/main/src/compiler/emitter.ts) generates the final JavaScript code based on the AST. The .ts files are converted to .js files according to the JavaScript version specified in tsconfig.json.

#### References

<a href="https://www.youtube.com/watch?v=X8k_4tZ16qU" target="_blank">How the TypeScript Compiler Compiles - understanding the compiler internal</a><br>
<a href="https://github.com/microsoft/TypeScript-Compiler-Notes" target="_blank">[Github] microsoft/TypeScript-Compiler-Notes</a><br>
