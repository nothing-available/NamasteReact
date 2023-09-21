## Assignment - 5

# Taik is Cheap, show me the code

## Q: Is JSX mandatory for React?
A: No, JSX (JavaScript XML) is not mandatory for building React applications, but it is highly recommended and widely used because it makes writing and maintaining React code much easier and more readable.
React can be used with plain JavaScript to create elements and manage their rendering, but JSX provides a more declarative and HTML-like syntax for defining the structure and layout of your components. JSX allows you to embed HTML-like tags directly in your JavaScript code, making it easier to visualize the component's structure and hierarchy.

Here's an example of a simple React component written without JSX:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
```

And here's the same component written using JSX:

```javascript
const element = <h1>Hello, world!</h1>;
```

As you can see, JSX is more concise and closely resembles HTML, which is why it's the preferred way to write React components in most cases. JSX code is also transpiled by tools like Babel into JavaScript code that React can understand, so it's not actually executed in the browser.

In summary, while JSX is not strictly mandatory for React, it is the recommended and widely adopted way to define React components because of its readability and developer-friendly syntax.

## Q: Is ES6 mandatory for React?
A: No, ES6 (ECMAScript 6) is not mandatory for building React applications, but it is highly recommended and widely used because it makes writing and maintaining React code much easier and more readable.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A : `{TitleComponent}` is a reference to the component, while `{<TitleComponent/>}` and `{<TitleComponent></TitleComponent>}` are JSX expressions that will render the component.

## Q: How can I write comments in JSX?
A: You can write comments in JSX using the JavaScript-style single-line and multi-line comment syntax. For example:

```javascript
const element = (
  <div>
    {/* A single-line comment */}
    <h1>Hello, world!</h1>
    {/* A multi-line comment */}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);
```

## Q: What is <React.Fragment></React.Fragment> and <></> ?
A: `<React.Fragment></React.Fragment>` and `<></>` are two ways to define a React fragment, which is a component that can contain multiple children. Fragments are useful when you want to return multiple elements from a component without adding an extra DOM element to the page.

The `<React.Fragment></React.Fragment>` syntax is the standard way to define a fragment, but the `<></>` syntax is a shorthand that was introduced in React 16.2.0. Both syntaxes are equivalent and can be used interchangeably.

## Q: What is Virtual DOM?
- The Virtual DOM is a lightweight, in-memory representation of the real DOM.

- When data in a web application changes, instead of directly updating the real DOM, React (or other libraries using a Virtual DOM) first updates the Virtual DOM to reflect these changes.

- The Virtual DOM is essentially a JavaScript object that mirrors the structure of the real DOM.

## Q: What is Reconciliation in React?

- After updating the Virtual DOM, React performs a process called "reconciliation" or "diffing."

- During reconciliation, React compares the previous Virtual DOM (before the data change) with the new Virtual DOM (after the data change) to determine the differences or "diffs" between the two.

- React identifies which parts of the Virtual DOM have changed and need updating.

- React then updates only the parts of the real DOM that have changed, resulting in better performance and a more responsive user interface.

## Q: What is React Fiber?
React Fiber is an internal reimplementation of the React core algorithm introduced in React version 16. It's a significant and fundamental change to how React manages the rendering of components and their updates. React Fiber was designed to improve the performance and responsiveness of React applications, especially in scenarios with frequent updates and interactions, such as animations or large and complex component trees.

## Q: What is the difference between React Fiber and Virtual DOM?
- The Virtual DOM is a lightweight, in-memory representation of the real DOM. When data in a web application changes, instead of directly updating the real DOM, React (or other libraries using a Virtual DOM) first updates the Virtual DOM to reflect these changes. The Virtual DOM is essentially a JavaScript object that mirrors the structure of the real DOM.

- React Fiber is an internal reimplementation of the React core algorithm introduced in React version 16. It's a significant and fundamental change to how React manages the rendering of components and their updates. React Fiber was designed to improve the performance and responsiveness of React applications, especially in scenarios with frequent updates and interactions, such as animations or large and complex component trees.

## Q: Why we need keys in React? When do we need keys in React?
A: Keys are used to identify unique Virtual DOM elements and are required when rendering lists of elements in React. Keys are used by React to efficiently update the DOM and only re-render elements that have changed, rather than re-rendering the entire list.

## Q: Can we use index as keys in React?
A: Yes, you can use the index of an element in a list as its key, but it's not recommended. Using the index as the key can lead to unexpected behavior in certain scenarios, such as when the list is reordered or filtered. It's better to use a unique identifier for each element in the list as its key.

## Q: What is props in React? Ways to
In React, "props" is short for "properties," and it's a mechanism for passing data from a parent component to a child component. Props are used to make your components dynamic by allowing you to customize their behavior and appearance based on the data you pass to them. Here's an overview of props in React and how you can use them:

### Passing Props to a Component:

To pass props to a React component, you include them as attributes when rendering the component. These attributes are then accessible within the component as a JavaScript object.

```jsx
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const name = 'Alice';

  return (
    <div>
      <ChildComponent name={name} />
    </div>
  );
}

export default ParentComponent;
```

In this example, the `name` prop is passed to the `ChildComponent`.

### Accessing Props in a Component:

Inside the child component (`ChildComponent` in this case), you can access the passed props as properties of the `props` object.

```jsx
// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}

export default ChildComponent;
```

Here, `props.name` accesses the `name` prop passed from the parent component.

### Default Props:

You can specify default values for props in case they are not provided. This is done using the `defaultProps` property of the component.

```jsx
function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}

ChildComponent.defaultProps = {
  name: 'Guest',
};
```

In this example, if the `name` prop is not provided when rendering `ChildComponent`, it will default to `'Guest'`.

### Destructuring Props:

To make your component code cleaner, you can use destructuring to extract props directly within the function parameter.

```jsx
function ChildComponent({ name }) {
  return <p>Hello, {name}!</p>;
}
```

This way, you can directly access `name` without using `props.name`.

### Using Props in Class Components:

In class components, you access props via `this.props`.

```jsx
class ChildComponent extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}
```

### Validating Props:

You can also validate the props received by a component using PropTypes. PropTypes help document and enforce the expected data types of props.

```jsx
import PropTypes from 'prop-types';

function ChildComponent(props) {
  return <p>Hello, {props.name}!</p>;
}

ChildComponent.propTypes = {
  name: PropTypes.string.isRequired,
};
```

In this example, we're specifying that the `name` prop should be a string and is required. React will issue a warning if the prop doesn't meet these requirements.

In summary, props in React are a fundamental mechanism for passing data from parent to child components, making your components dynamic and reusable. They allow you to customize the behavior and appearance of your components based on the data you pass to them, and they can be validated for correctness using PropTypes.

## Q: What is a Config Driven UI ?
A: Config-driven UI is a design pattern that allows you to build user interfaces that are driven by configuration rather than code. This means that you can build UIs without writing any code, and instead, you can use a configuration file to define the structure and behavior of your UI components.This makes it easier to build and maintain complex UIs because you don't have to write code for every component, and you can easily make changes to the UI by updating the configuration file. It also makes it easier to reuse components across different projects because you can simply copy the configuration file and use it in another project. 