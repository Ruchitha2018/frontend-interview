## Basics

### 1. What is React?

- Open-Source
- JS Frontend Library
- used for building composable UIs particularly for SPAs.

### 2. Features of React?

- Uses JSX Syntax: A syntax extension that allows you to write HTML-like code within JavaScript.
- Uses Virtual DOM
- Component Based Architecture
- Supports Server Side Rendering, which is useful for SEO.
- Unidirectional/one-way data flow

### 3. JSX

- Uses JSX Syntax: A syntax extension that allows you to write HTML-like code within JavaScript.
- Syntactic Sugar for the `React.createElement(type, props, ...children)`

### 4. Ways of creating components

- Functional Components
- Class Components

### 5. What are States?

- It is an object that is used to store information and holds dynamic data while the app is running, like user input, button clicks, or data fetched from a server.
- Local to each component
- Mutuable and Dynamic Data
- When a components state changes, React automatically re-renders
- Managed with `useState` hook.

### 6. What are Props?

- Way to pass static/dynamic data from parent to child components.
- Immutable
- Passed as Attributes

### 7. Key Prop?

- Special attribute should include when mapping arrays/objects.
- Helps which items have changed, added or removed.
- Used for performance optimization.
- Should be unique value

### 8. Virtual DOM

- It is the lightweight copy of the real DOM.
- Steps:
- When component re-renders, React creates a virtual copy of the Real DOM i.e., virtual DOM.
- When app data changes, React first updates the Virtual DOM, not the Real DOM.
- React compares the updated virtual DOM with the previous version of the virtual DOM called Diffing.
- React identifies which parts of the virtual DOM have changed (e.g., new elements, deleted elements, updated content) and needs to be reflected in the real DOM.
- It updates only the changed parts of the real DOM, making the app fast and efficient called Reconciliation.
- reconciliation helps React figure out the smallest number of changes to make, improving performance and speed.

### 9. Controlled Components

- forms element state is managed by React.
- value of the input is controlled by the components state.

### 10. Uncontrolled Components

- forms element state is managed by DOM.
- input value is accessed using a ref.

### 11. Children Prop

- special prop that allows to pass content(text, element or component) to a component from its parent.
- commonly used in layout components like wrappers, containers or modal dialogs.

### 12. Fragments

- It is the way to group multiple elements together without adding extra `div` or nodes.
- `<></>`
- `<React.Fragment></React.Fragment>`

### 13. Portals

- It allows us to render components outside the parent component DOM hierarchy.
- Examples are Modals, Tooltips, Notifications
- HTML Code

```
<div id="root"></div> <!-- Normal app -->
<div id="modal-root"></div> <!-- Space for portals -->
```

- React Code

```
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

### 15. Stateful Components

- Components which can store and manage data using state.
- uses `useState()` hook.

### 16. Stateless Components

- Components which do not depend on state.
- They are pure components.
- They focus solely on rendering UI based on the provided input i.e., `props`
- Used when we need to display data passed as props.

### 17. React Components Naming

1. Start with a Capital Letter: Components must use PascalCase (e.g., MyComponent). Lowercase names are treated as HTML tags.
2. Avoid Reserved Keywords: Don't use JavaScript or HTML reserved words like return or default.
3. No Special Characters: Names cannot include dashes, spaces, or special symbols.
4. Dynamic Names Not Allowed: Components can't be named using strings or variables.
5. Export-Import Match: For named exports, import names must match the export. Default exports can use any name.

```
const DynamicComponent = "MyComponent";
<DynamicComponent />; // Error: React cannot dynamically resolve this

const My-Component = () => {}; // Syntax error
```

Instead use below:-

```
const DynamicComponent = MyComponent;
<DynamicComponent />;
```

### 18. How to import and export components using React and ES6?

#### Exporting Components

1. Named Export

```
export const MyComponent = () => <div>Hello!</div>;
```

2. Default Export

```
const MyComponent = () => <div>Hello!</div>;
export default MyComponent;
```
#### Importing Components
1. Import Named Exports:
```
import { MyComponent } from './MyComponent';
```
2. Import Default Export:
```
import MyComponent from './MyComponent';
```
### 19. Difference between React and React DOM:
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

### 20. React Animation Packages:
- Framer Motion
- React Spring
- React Transition Group
- React Motion

### 21. React Specific Linters
- Help maintain clean, consistent and error-free code in React Projects.
- Plugins:
 - ```eslint-plugin-react```: Provides linting rules for React.
 - ```eslint-plugin-react-hooks```: Ensures the correct usage of React Hooks.
 - ```eslint-plugin-jsx-a11y```: Enforces accessibility best practices in JSX code.
 - Code formatter, integrates with ESLint using ```eslint-plugin-prettier```.

 ### 22. How to pretty print JSON with React?

```
const App = () => {
  const data = { name: "John", age: 30, city: "New York" };

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre> // Pretty-print JSON
  );
};

export default App;
```

### Why you can't update props in React?
Props are immutable: They cannot be changed by the child component.
Unidirectional data flow: Props flow from parent to child, ensuring predictable updates.
Controlled by parent: Props reflect parent state; only the parent can update them.
Solution: Manage the value in the parent’s state and pass it via props.

### Naming a Component Names
-  Components must start with an uppercase letter.
- Use PascalCase for custom components (e.g., MyComponent).
- Lowercase names are treated as HTML tags.
- Avoid React-reserved names like React or Component.

### React Mixins
