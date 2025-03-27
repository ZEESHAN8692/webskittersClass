// 1)Write a function that takes an array of numbers and returns a new array where each element is doubled.
// const double = (arr) => {
//   return arr.map((item) => item * 2);
// };
// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9];
// console.log(double(arr));

//-------------------------------------------
// 2)Create a function that takes an array of numbers and returns a new array containing only the even numbers

// const number = (arr) => {
//   let b = arr.filter((item) => item % 2 === 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(number(arr));

//---------------------------------------------------------

// 3)Implement a function that calculates the sum of all the elements in an array using the reduce function.

// const sum = (arr) => {
//   let b = arr.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(`sum = ${sum(arr)}`);

//--------------------------------------------------

// 4)Write a function that finds the maximum value in an array of numbers using the reduce function.

// const maximum = (arr) => {
//   let b = arr.reduce((acc, cur) => {
//     if (acc < cur) {
//       acc = cur;
//     }
//     return acc;
//   }, 0);
//   return b;
// };
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(`maximum Value = ${maximum(arr)}`);

//----------------------------------------------------------

// 5)Implement a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter function.

// const prime = (arr) => {
//   if (arr <= 1) {
//     return false;
//   }
//   for (let i = 2; i < arr; i++) {
//     if (arr % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// function primeArray(arr) {
//   return arr.filter(prime);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(primeArray(arr));

// const isprime = (arr) => {
//   if (arr <= 1) {
//     return false;
//   }
//   for (let i = 2; i < arr; i++) {
//     if (arr % i === 0) {
//       return false;
//     }
//     return true;
//   }
// };
// function filterArray(arr) {
//   return arr.filter(isprime);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 50, 9, 10];
// console.log(filterArray(arr));

//---------------------------------------------------

// 6)Create a function that takes an array of objects and sorts them based on a specified property using the sort function.

// const arrObj = (obj) => {
//   return obj.sort((a, b) => {
//     if (a.title < b.title) {
//       return -1;
//     }
//     if (a.title > b.title) {
//       return 1;
//     }
//     return 0;
//   });
// };
// let obj = [
//   { title: "hello" },
//   { title: "zeeshan " },
//   { title: "byeee" },
//   { title: "namaste" },
// ];
// console.log(arrObj(obj));

//--------------------------------------------------------

// 7)Write a function that removes duplicate values from an array using the filter function.

// const rDuplicate = (arr) => {
//   return arr.filter((item, index, self) => {
//     return self.indexOf(item) === index;
//   });
// };
// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 6, 5, 5];
// console.log(rDuplicate(arr));

// const duplicate = (arr) => {
//   return arr.filter((item, index, self) => {
//     return self.indexOf(item) === index;
//   });
// };
// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 6, 5, 5];
// console.log(duplicate(arr));

//------------------------------------------------------------

// 8)Write a function that accepts any number of arguments and returns their sum using the rest parameter.
// const sum = (...num) => {
//   let Sum = 0;
//   for (const i of num) {
//     Sum += i;
//   }
//   console.log(Sum);
// };

// sum(1, 2, 3, 4, 5, 6, 7);

//-------------------------------------------------------------
// 9)Create a function that takes any number of arguments (numbers) and calculates the average using the rest parameter.

// const average = (...num) => {
//   return num.reduce((acc, cur) => acc + cur, 0) / num.length;
// };
// console.log(average(1, 2, 3, 4, 5));

//---------------------------------------------------------------

// 10)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

// const largest = (...num) => {
//   let a = num.sort((a, b) => b - a);
//   return a[0];
// };
// console.log(`largest Number = ${largest(23, 45, 12, 500, 77)}`);

//---------------------------------------------------------------

// 11)Write a function that takes a variable number of arrays as arguments and returns a single array containing all the elements from the input arrays, using the rest parameter.

// 12)Implement a function that takes a variable number of string arguments and returns an array containing only the strings with a length greater than a specified value using the rest

// 13)Edit in array of object  property without changing original array of object.

// 1)Create a functional component named Counter that uses the useState hook to display and increment a count when a button is clicked.

// 2)How can you use a functional update with the useState hook to update the state based on the previous state?

// 3)Create a component named ColorPicker that allows a user to select a color from a dropdown menu using the useState hook.

// 4)Explain how you can use the useState hook to manage an array of items that can be added and removed from the list.

// 5)Create a component named Toggle that toggles the visibility of content when a button is clicked using the useState hook.

// 6)How can you initialize state based on a prop value using the useState hook?

// 7)Create a component that tracks the mouse position and displays it using the useState hook.

// 8)How can you use the useState hook to manage a complex object state, such as a form with multiple input fields?

// 9)Create a component that fetches and displays data from an API using the useState hook.

// 10)How can you use the useState hook to manage a state that involves conditional rendering, like a loading spinner?

// 1)Create a component that fetches data from an API when it mounts and displays it on the screen using the useEffect hook.

// 2)How can you conditionally trigger the effect to run based on a specific value using the useEffect hook?

// 3)Create a component that updates the document title based on a state value using the useEffect hook.

// 4)How can you clean up side effects when a component unmounts using the useEffect hook?

// 5)Create a component that sets up an event listener when it mounts and removes the listener when it unmounts using the useEffect hook.

// 6)How can you use the useEffect hook to debounce a search input before making an API call?

// 7)Create a component that logs a message every time a prop value changes using the useEffect hook.

// 8)How can you use the useEffect hook to perform an effect only after the initial render?

// 9)Create a component that fetches data from an API whenever a button is clicked using the useEffect hook.

// 10) How can you use the useEffect hook to update a state value with the current time every second?

// 1)Create a component that displays the ID parameter from the URL using the useParams hook.

// 2)How can you access multiple parameters from the URL using the useParams hook?

// 3)Create a component that displays different content based on the value of a category parameter using the useParams hook.

// 4)How can you handle optional parameters using the useParams hook?

// 5)Create a component that retrieves a username parameter from the URL and fetches user data using the useParams hook and the useEffect hook.

// 6)Create a component that uses the useParams hook to retrieve a search query parameter from the URL and use it to filter a list of items.

// 7)How can you provide default values for URL parameters using the useParams hook?

// 8)Create a component that uses the useParams hook to retrieve a date parameter from the URL and display events happening on that date.

// 9)How can you use the useParams hook to conditionally render different components based on a route parameter?

// 1)What is React.js, and how does it differ from other JavaScript frameworks?

// 2)Explain the concept of Virtual DOM and how it improves performance in React.

// 3)Describe the purpose of JSX in React and how it is transformed into JavaScript.

// 4)How does React handle data binding and state management?

// 5)Explain the role of reconciliation in React and how it helps in updating the DOM efficiently.

// 6)What are the key differences between functional components and class components?

// 7)Describe React's one-way data flow and how it helps in managing component state.

// 8)Explain the purpose of React Fragments and when they are used.

// What are React keys and why are they important in rendering lists of components?

// Discuss the benefits of server-side rendering (SSR) in React applications.

// How does React handle event delegation and event handling?

// Explain the significance of the "props" and "state" objects in React components.

// 1)List and describe the lifecycle methods of class components in React.

// 2)How does React 16.3+ introduce changes to the component lifecycle methods?

// 3)What is the purpose of the getDerivedStateFromProps lifecycle method?

// 4)Explain the difference between componentDidMount and useEffect hook with an example.

// 5)Describe scenarios when you would use the shouldComponentUpdate method.

// 6)How can you achieve the functionality of componentDidUpdate using the useEffect hook?

// 1)Compare and contrast local component state and global state management libraries (e.g., Redux, MobX).

// 2)Explain the "lifting state up" pattern and why it's used in React.

// 3)Discuss the concept of "Redux Thunk" middleware and its purpose.

// 4)What is the "Redux Saga" library, and how does it handle asynchronous actions?

// 5)Describe the role of "selectors" in Redux and why they are used.

// 1)Explain the concept of hooks in React and how they simplify component logic.

// 2)List and explain some of the built-in hooks provided by React.

// 3)How do you create custom hooks in React? Provide an example.

// 4)Discuss the differences between the useState and useReducer hooks.

// 5)Describe the rules of using hooks and why they must be called at the top level of a component.

// 1)Explain the role of React Router in creating a single-page application (SPA).

// 2)Compare the different types of React Router components: BrowserRouter, HashRouter, and MemoryRouter.

// 3)How can you handle route parameters and query strings using React Router?

// 4)Discuss how to achieve nested routing using React Router.

// 1)Explain controlled components and uncontrolled components in React forms.

// 2)Describe how you can validate form input in React applications.

// 3)Discuss the purpose of the useForm hook in form management.

// 1)what is memoization in React, and how does it improve performance?

// 2)Describe how you can use the React.memo higher-order component to optimize functional components.

// 3)Discuss techniques for optimizing the rendering of lists in React.

// 1)Explain the concept of lazy loading in the context of React components.
// 2)Describe how you can use the React.lazy function to lazily load components.

// 1)Describe the process of implementing user authentication and authorization in a React application.

// 2)Explain the purpose of protected routes and how they are implemented

// 1)What is Redux Toolkit, and why was it introduced to the Redux ecosystem?

// 2)How does Redux Toolkit simplify the process of working with Redux in comparison to the traditional approach?

// #)Explain the purpose of the configureStore function provided by Redux Toolkit.

// 1)What is the createSlice function in Redux Toolkit, and how does it create a reducer and action creators?

// 2)How can you define initial state and reducer functions using the createSlice function?

// 3)Explain the automatic generation of action types by Redux Toolkit when using createSlice.

// 1)Describe how Redux Toolkit generates action creators using the createSlice function.

// 2)How can you use the action creators generated by createSlice to dispatch actions?

// 1)Explain the concept of immutability in Redux state updates and how Redux Toolkit helps enforce it.

// 2)How does Redux Toolkit handle immutable updates when using the createSlice function?

// 1)How can you handle asynchronous actions using Redux Toolkit's createAsyncThunk function?

// 2)Explain the purpose of Redux Toolkit's createAsyncThunk and how it simplifies the process of managing async actions

// 1)What middleware is included by default in Redux Toolkit's configureStore function?

// 2)\How can you add custom middleware to the Redux Toolkit store?

// 1)How does Redux Toolkit integrate with Redux DevTools for debugging?
// 2)Explain the benefits of using Redux DevTools alongside Redux Toolkit.

// 1)How does Redux Toolkit integrate with the react-redux library?
// 2)Discuss how Redux Toolkit simplifies the process of connecting components to the Redux store.

// Absolutely, here are 20 customized JavaScript interview questions along with their answers to help you prepare:

// *1. What is the difference between `let`, `const`, and `var` in JavaScript?*
// - `let` and `const` have block scope, while `var` has function scope.
// - `let` allows reassignment, whereas `const` is for constants that can't be reassigned.
// - `var` declarations are hoisted to the top of their containing function.

// *2. Explain the concept of closure in JavaScript.*
// A closure is a function that remembers the variables in its lexical scope even when the function is executed outside that scope. It allows maintaining private data and encapsulation.

// *3. How does JavaScript handle asynchronous operations?*
// JavaScript uses callbacks, promises, and async/await to handle asynchronous operations. Callbacks are functions passed as arguments, promises represent values that might be available now, or in the future, and async/await provides a more synchronous-style coding while dealing with asynchronous code.

// *4. What's the difference between `null` and `undefined`?*
// `undefined` is a value assigned to a variable that has been declared but hasn't been initialized. `null` is a value that represents the intentional absence of any object value.

// *5. Explain event delegation in JavaScript.*
// Event delegation involves attaching a single event handler to a higher-level element (usually a parent) instead of attaching handlers to multiple individual child elements. This way, you can capture events on dynamically added elements without needing to attach separate listeners.

// *6. How can you prevent the default behavior of an event in JavaScript?*
// By using the `event.preventDefault()` method within the event handler. This prevents the default action associated with the event from occurring.

// *7. What's the purpose of the `this` keyword in JavaScript?*
// `this` refers to the current context or object that a function is executed in. Its value depends on how the function is called: as a method, a constructor, or standalone.

// *8. What is the purpose of the `bind` method?*
// The `bind` method creates a new function with a specified `this` value and initial arguments. It's commonly used to set the value of `this` for functions that will be invoked later.

// *9. Explain the same-origin policy and how it relates to AJAX requests.*
// The same-origin policy restricts web pages from making requests to a different domain than the one that served the web page. AJAX requests can only be made to the same domain, protocol, and port due to this policy.

// *10. How can you deep-clone an object in JavaScript?*
// You can deep-clone an object using methods like `JSON.parse(JSON.stringify(obj))`. However, this approach doesn't handle functions, special objects, or circular references well.

// *11. What is a callback function?*
// A callback function is a function that's passed as an argument to another function and is executed at a later time or after a specific event. It's often used in asynchronous operations to manage the flow of execution.

// *12. Explain the difference between synchronous and asynchronous programming.*
// Synchronous programming executes tasks sequentially, one after another. Asynchronous programming allows tasks to be executed independently, enabling non-blocking code execution.

// *13. How do you check if a variable is an array in JavaScript?*
// You can use the `Array.isArray(variable)` function to determine if a variable is an array.

// *14. What is the purpose of the `map()` function in JavaScript?*
// The `map()` function is used to create a new array by applying a provided function to every element in the calling array. It doesn't modify the original array.

// *15. Explain the concept of "hoisting" in JavaScript.*
// Hoisting is the behavior where variable and function declarations are moved to the top of their containing scope during compilation. However, only the declarations are hoisted, not the assignments.

// *16. What is the difference between `==` and `===` operators?*
// `==` is the equality operator that performs type coercion, while `===` is the strict equality operator that checks both value and type.

// *17. How does event bubbling work in the DOM?*
// Event bubbling is a phenomenon where an event triggered on a child element "bubbles up" through its parent elements in the DOM tree, triggering their respective event handlers.

// *18. Explain the concept of "this" in arrow functions.*
// Arrow functions do not have their own `this` context; instead, they inherit the `this` value from the surrounding lexical context. This behavior is in contrast to regular functions, which have their own dynamic `this`.

// *19. What is the purpose of the `localStorage` and `sessionStorage` objects?*
// Both `localStorage` and `sessionStorage` are used to store key-value pairs in a web browser. The key difference is that `localStorage` data persists even after the browser is closed, while `sessionStorage` data is cleared when the session ends.

// *20. How can you handle errors in JavaScript?*
// Errors can be handled using try-catch blocks. The `try` block contains the code that might throw an error, and the `catch` block contains the code to handle the error when it occurs. Additionally, you can use the `finally` block to execute code regardless of whether an error was thrown or not.

// These interview questions cover a variety of JavaScript concepts and should help you prepare for different aspects of a JavaScript-focused interview. Remember to understand the underlying concepts behind each question to demonstrate a strong grasp of JavaScript fundamentals.

////////////////////////////////////////////////////////////////////////////////////////////////////

// let a = [4, 2, 4, 6, 3, 7];
// let b = a.sort((a, b) => a - b);
// console.log(b);

// let d = [4, 2, 4, 6, 3, 7];
// let e = d.sort((a, b) => b - a);
// console.log(e);

// let str = ["d", "e", "a", "b", "c"];
// let com = str.sort((a, b) => a.localeCompare(b));
// console.log(com);

// let stri = ["d", "e", "a", "b", "c"];
// let comp = str.sort((a, b) => b.localeCompare(a));
// console.log(comp);

//------------------------------------
