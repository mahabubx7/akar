# Get Started

## Introduction

Welcome to the `Akar.js`. This page will walk you through the step-by-step process of installing an npm package and provide a sample usage with a theme-based table of contents.

## Table of Contents

- [Installation](#installation)
- [Sample Usage](#sample-usage)
- [Conclusion](#conclusion)

## Installation

To install the npm package, follow these steps:

1. Open your terminal.
2. Run the following command to install the package:

<Tabs>
  <TabItem value="npm" label="npm">

```sh
npm install akarjs
```

  </TabItem>

  <TabItem value="yarn" label="yarn">

```sh
yarn add akarjs
```

  </TabItem>
</Tabs>

3. Verify the installation by checking the package version:

```sh
npm list akarjs
```

## Sample Usage

After installing the package, you can use it in your project as follows:

1. Import the package in your JavaScript file:

```ts
import Akar from "akarjs"
// or
import { a } from "akarjs"
```

2. Use the package in your code:

```ts
const objectSchema = a.object({ message: a.string().min(3) })
console.log(objectSchema.parse({ message: "Hello!" }))
// output :=>
/*
  {
    value: {
      message: "Hello!"
    }
  }
*/
```

## Conclusion

You have successfully installed and used the npm package. Refer to the package documentation for more detailed information and advanced usage.
