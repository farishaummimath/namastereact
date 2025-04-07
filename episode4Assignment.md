# Chapter 04 - Talk is cheap, show me the code!

## Assignment Questions

### 1. Is JSX mandatory for React?
No, JSX is not mandatory for React. React can work without JSX by using `React.createElement()` to create elements. However, JSX makes the code more readable and easier to write.

### 2. Is ES6 mandatory for React?
No, ES6 is not mandatory for React. React can be written using ES5 syntax, but ES6 features like `arrow functions`, `classes`, `template literals`, and `destructuring` make the code cleaner and more modern.

### 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX
- `{TitleComponent}`: Refers to the variable or function `TitleComponent` itself, not its rendered output.
- `{<TitleComponent/>}`: Renders the `TitleComponent` as a self-closing tag.
- `{<TitleComponent></TitleComponent>}`: Renders the `TitleComponent` with an opening and closing tag. Use this when you need to pass children to the component.

### 4. How can I write comments in JSX?
You can write comments in JSX using curly braces and JavaScript-style comments:
```jsx
{/* This is a JSX comment */}
```

### 5. What is `<React.Fragment></React.Fragment>` and `<></>`?
- `<React.Fragment></React.Fragment>`: A wrapper component that allows grouping multiple elements without adding extra nodes to the DOM.
- `<></>`: A shorthand for `React.Fragment`.

Example:
```jsx
<React.Fragment>
  <h1>Title</h1>
  <p>Description</p>
</React.Fragment>

<>
  <h1>Title</h1>
  <p>Description</p>
</>
```

### 6. What is Virtual DOM?
The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to optimize updates by comparing the current Virtual DOM with the previous one (diffing) and applying only the necessary changes to the real DOM.

### 7. What is Reconciliation in React?
Reconciliation is the process by which React updates the DOM. It involves comparing the new Virtual DOM with the previous one and efficiently updating only the parts of the DOM that have changed.

### 8. What is React Fiber?
React Fiber is the reimplementation of React's core algorithm. It enables incremental rendering, prioritization of updates, and better handling of animations and gestures.

### 9. Why do we need keys in React? When do we need keys in React?
Keys help React identify which elements have changed, been added, or removed. They are essential when rendering lists of elements to ensure efficient updates and avoid unnecessary re-renders.

### 10. Can we use index as keys in React?
Yes, but it is not recommended. Using indexes as keys can lead to issues with component state and performance when the list order changes. Use unique identifiers whenever possible.

### 11. What is `props` in React?
Props (short for properties) are a way to pass data from a parent component to a child component. They are read-only and allow components to be reusable and dynamic.

Example:
```jsx
const Greeting = (props) => <h1>Hello, {props.name}!</h1>;
<Greeting name="John" />;
```

### 12. What is a Config Driven UI?
A Config Driven UI is a design pattern where the UI is dynamically generated based on a configuration object. This approach allows for flexibility and reusability by defining the structure, content, and behavior of the UI in a configuration file or object.

Example:
```javascript
const config = {
  title: "Welcome",
  buttons: [
    { label: "Submit", action: "submit" },
    { label: "Cancel", action: "cancel" },
  ],
};
```