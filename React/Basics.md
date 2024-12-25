# Basics

## What is React?

- Open-Source
- JS Frontend Library
- used for building composable UIs particularly for SPAs.

## Features of React?

- Uses JSX Syntax: A syntax extension that allows you to write HTML-like code within JavaScript.
- Uses Virtual DOM
- Component Based Architecture
- Supports Server Side Rendering, which is useful for SEO.
- Unidirectional/one-way data flow

## JSX

- Uses JSX Syntax: A syntax extension that allows you to write HTML-like code within JavaScript.
- Syntactic Sugar for the `React.createElement(type, props, ...children)`

## Ways of creating components

- Functional Components
- Class Components

## What are States?

- It is an object that is used to store information and holds dynamic data while the app is running, like user input, button clicks, or data fetched from a server.
- Local to each component
- Mutuable and Dynamic Data
- When a components state changes, React automatically re-renders
- Managed with `useState` hook.

## What are Props?

- Way to pass static/dynamic data from parent to child components.
- Immutable
- Passed as Attributes

## Key Prop?

- Special attribute should include when mapping arrays/objects.
- Helps which items have changed, added or removed.
- Used for performance optimization.
- Should be unique value

## Virtual DOM

- It is the lightweight copy of the real DOM.
- Steps:
  - When component re-renders, React creates a virtual copy of the Real DOM i.e., virtual DOM.
  - When app data changes, React first updates the Virtual DOM, not the Real DOM.
  - React compares the updated virtual DOM with the previous version of the virtual DOM called Diffing.
  - React identifies which parts of the virtual DOM have changed (e.g., new elements, deleted elements, updated content) and needs to be reflected in the real DOM.
  - It updates only the changed parts of the real DOM, making the app fast and efficient called Reconciliation.
  - Reconciliation helps React figure out the smallest number of changes to make, improving performance and speed.

## Controlled Components

- Forms element state is managed by React.
- Value of the input is controlled by the components state.

## Uncontrolled Components

- Forms element state is managed by DOM.
- Input value is accessed using a ```ref```.

##  Children Prop

- special prop that allows to pass content(text, element or component) to a component from its parent.
- commonly used in layout components like wrappers, containers or modal dialogs.

## Fragments

- It is the way to group multiple elements together without adding extra `div` or nodes.
- `<></>`
- `<React.Fragment></React.Fragment>`

## Portals

- It allows us to render components outside the parent component DOM hierarchy.
- Examples are Modals, Tooltips, Notifications

```html
<div id="root"></div> <!-- Normal app -->
<div id="modal-root"></div> <!-- Space for portals -->
```

```js
import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root") // Teleport here
  );
}

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Modal>I'm a modal!</Modal> {/* Rendered outside */}
    </div>
  );
}

export default App;
```

## Stateful Components

- Components which can store and manage data using state.
- uses `useState()` hook.

## Stateless Components

- Components which do not depend on state.
- They are pure components.
- They focus solely on rendering UI based on the provided input i.e., `props`
- Used when we need to display data passed as props.

## React Components Naming

1. **Start with a Capital Letter:** Components must use PascalCase (e.g., MyComponent). Lowercase names are treated as HTML tags.
2. **Avoid Reserved Keywords:** Don't use JavaScript or HTML reserved words like return or default.
3. **No Special Characters:** Names cannot include dashes, spaces, or special symbols.
4. **Dynamic Names Not Allowed:** Components can't be named using strings or variables.
5. **Export-Import Match:** For named exports, import names must match the export. Default exports can use any name.

```js
const DynamicComponent = "MyComponent";
<DynamicComponent />; // Error: React cannot dynamically resolve this

const My-Component = () => {}; // Syntax error
```

### Instead use below:-

```js
const DynamicComponent = MyComponent;
<DynamicComponent />;
```

##  How to import and export components using React and ES6?
### 1. Default Export
- A file can have only one default export.
- Import without curly braces, and the name can be any.
```js
// Exporting File: MyComponent.js
export default function MyComponent() {
    return <h1>Hello, I am the default export!</h1>;
}
```
```js
// Importing File: App.js 
import MyComponent from './MyComponent';

function App() {
    return (
        <div>
            <MyComponent />
        </div>
    );
}

export default App;
```
### 2. Named Export
- A file can have multiple named exports.
- Import using curly braces `{}` with exact names.
```js
// Exporting File: MyComponents.js
export function Header() {
    return <h1>This is the Header</h1>;
}

export function Footer() {
    return <h3>This is the Footer</h3>;
}

```
```js
// Importing File: App.js
import { Header, Footer } from './MyComponents';

function App() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}

export default App;
```
### 3. Mixed Export
Use both default and named exports in the same file.
```js
// Exporting File: MyComponents.js
export default function Main() {
    return <p>This is the Main Component</p>;
}

export function Header() {
    return <h1>This is the Header</h1>;
}

export function Footer() {
    return <h3>This is the Footer</h3>;
}
```
```js
// Importing: File: App.js
import Main, { Header, Footer } from './MyComponents';

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
```
## Difference between React and React DOM:
- React:
  - Used to build UI components and manage their logic and state
  - Do not directly interact with the DOM.
  - Eg:- ```useState``` and ```useEffect```

- React DOM:
  - Renders React components to the browser DOM
  - Used to update the browser DOM efficiently using React's Virtual DOM
  - Eg:- ```ReactDOM.createRoot```  and ```ReactDOM.render```

- Separation allows React to work on different platforms (e.g., React Native).
- Keeps React lightweight and modular for easier maintenance.

## React Animation Packages:
- Framer Motion
- React Spring
- React Transition Group
- React Motion

## React Specific Linters
- Help maintain clean, consistent and error-free code in React Projects.
- Plugins:
 - ```eslint-plugin-react```: Provides linting rules for React.
 - ```eslint-plugin-react-hooks```: Ensures the correct usage of React Hooks.
 - ```eslint-plugin-jsx-a11y```: Enforces accessibility best practices in JSX code.
 - Code formatter, integrates with ESLint using ```eslint-plugin-prettier```.

 ## How to pretty print JSON with React?

```js
const App = () => {
  const data = { name: "John", age: 30, city: "New York" };

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre> // Pretty-print JSON
  );
};

export default App;
```

## Why you can't update props in React?
- Props are immutable: They cannot be changed by the child component.
- Unidirectional data flow: Props flow from parent to child, ensuring predictable updates.
- Controlled by parent: Props reflect parent state; only the parent can update them.
- Solution: Manage the value in the parent’s state and pass it via props.


## React Mixins


## How to pass numbers to React component?
```js
<NumberDisplay value={10} /> // Correct
<NumberDisplay value="10" /> // Passes as a string, not a number
```

## What is the purpose of registerServiceWorker in React?
1. Offline Support: Allows the app to work without an internet connection by caching files.
2. Faster Loading: Loads the app faster by using cached assets instead of fetching them from the network.
3. Background Features: Enables tasks like background sync and push notifications.
4. Progressive Web Apps (PWA): Helps turn your app into a PWA with app-like features.

```js
import * as serviceWorker from './serviceWorker';

// Enable service worker for offline support
serviceWorker.register(); // Registers the service worker
// Use serviceWorker.unregister() if you don't need it.
```

- Works only on https:// or localhost.
- Use carefully to avoid serving outdated cached content.




