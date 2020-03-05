---
title: JavaScript Checklist
date: '2020-03-04'
spoiler: How much do you know about JavaScript?
type: 'topic'
thumbnail: ./js.svg
---
<!-- omit in toc -->
## Table of Contents

1. [void operator](#void-operator)
2. [undefined](#undefined)

## void operator

> The [`void` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) evaluates the given `expression` and then returns `undefined`.

<!-- omit in toc -->
### Use cases

1. `<a href="javascript:void(0)">`
2. Using `void 0` to shorten `undefined`
3. Using `void` to explicate non-value-returning(void) arrow functions and avoid memory leaking.
   ```js
   const log = x => void console.log(x);

   // In React useEffect
   useEffect(() => void setInterval(() => {}, 5000));
   ```
4. `void` can be used to force the function keyword to be treated as an expression instead of a declaration.
   ```js
    void function iife() {
      console.log("Executed!");
    }();
    // Output: "Executed"
   ```
5. More readable and higher efficiency.
   ```js
    const resolveFunc = val =>
      Promise((resolve, reject) =>
        void setTimeout(() => {
          resolve(() => console.log(val))
        }, 5000))

    return resolveFunc('Start')
      .then(() => resolveFunc('Continue'))
      .then(() => void resolveFunc('Oops!')) // run async, ignoring result
      .then(() => resolveFunc('Done'));
   ```
   
<!-- omit in toc -->
### Links

1. [A case for using void in modern JavaScript](https://gist.github.com/slikts/dee3702357765dda3d484d8888d3029e)
2. [void operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void)

## undefined

> [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined) is a property of the global object. That is, it is a variable in global scope. The initial value of `undefined` is the primitive value `undefined`.

In JavaScript, `undefined` is one of the **primitive values** while it is **not** a reserved keyword. 

<!-- omit in toc -->
### Use cases

1. It is not recommended to reassign values to `undefined`. 

```js
(() => {
  const undefined = true
  return console.log(undefined, typeof undefined)
})()

// output -> true, "boolean"
```

A not-assigned variable is of type `undefined`. A function without a `return` statement, or a function with an empty return statement returns `undefined`.

<!-- omit in toc -->
### Links

1. [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)