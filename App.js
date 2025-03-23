import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
// React Element - 
// React Element is a plain object describing a component instance or DOM node and its desired properties.
// React Element is a lightweight description of what to render.
const element = <h1 title="foo">Hello, world!</h1>;
const heading = React.createElement("h1", { title: "foo" }, "Hello, world!");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element); // replaces the previous render
// root.render(heading); // replaces the previous render

// // JSX and REact is not the same thing
// JSX is a syntax extension for JavaScript
// JSX produces React Elements


const jsxHeading = <h1 className="root">Hello, world! using jsx</h1>;
const reactHeading = React.createElement("h1", null, "Hello, --world!");
console.log(jsxHeading);
console.log(reactHeading);

// html like syntax
// JSX is a syntax extension for JavaScript
// JSX is a preprocessor step that adds XML syntax to JavaScript
// You can definitely use JSX with React
// JSX makes your code more readable
// JSX is not a necessity to write React applications
// JSX is a syntax sugar for React.createElement()

root.render(jsxHeading); // replaces the previous render
// root.render(reactHeading); // replaces the previous render
// parcel transpiles before it reaches the JS engine
// babel transpiles JSX to React.createElement() calls
// React.createElement() converted to React Elements
// React Elements are used to construct the DOM
// React Elements  to JavaScript objects => React Elements to DOM nodes

// Babel does the transpilation of JSX to React.createElement() calls
// React.createElement() calls are converted to React Elements
// React Elements are used to construct the DOM
// React Elements are JavaScript objects


// multiple lines of JSX
const multiLineJsx = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is good to see you</h2>
  </div>
);
const elem = <span>React  Farisha element</span>;

const heading2 = (
    <div>
        {elem}
        Namaste REact rocket emoji  &#128640;
        <h1>Hello, world!</h1>
        <h2>It is good to see you</h2>
    </div>)

// React Component
// React Component is a function or a class that accepts an input and returns a React Element
// React Component is a reusable piece of UI
// React Component is a JavaScript function that returns a React Element
// React Component is a JavaScript class that extends React.Component
// React Component is a JavaScript function that accepts props and returns a React Element

const HeadingComponet = () => {
    return <h1>Hello, world! Functional components</h1>;
}
// component composition
const number = 10;
const HeadingComponent2 = () =>  (
    <div>
        <HeadingComponet/>
        <h2>It is good to see you</h2>
    </div>
);
// const data = api.getData();
// assume malicious api , and tries to exqecute some code
// what all can be done with this , attacker can execute any code on your page
// jsx will sanitize the data and will not execute the code
// cross side scripting attack
const HeadingComponent = () =>  (
    <div>
        {
            
            (4+5)
        }
        {heading2}
        {data}
        <Title/>
        <h1 className="heading">Hello, world! Functional components</h1>
        <h2>It is good to see you</h2>
    </div>
);
const Title = () => {
    return <h1>{'This is a title'}</h1>;
}



root.render(<HeadingComponent />);