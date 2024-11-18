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
- Syntactic Sugar for the ```React.createElement(type, props, ...children)```

### 4. Ways of creating components
- Functional Components
- Class Components

### 5. What are States?
- It is an object that is used to store information and holds dynamic data while the app is running, like user input, button clicks, or data fetched from a server.
- Local to each component
- Mutuable and Dynamic Data
- When a components state changes, React automatically re-renders
- Managed with ```useState``` hook.

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
 - It is the way to group multiple elements together without adding extra ```div`` or nodes.
 - ```<></>```
 - ```<React.Fragment></React.Fragment>```

 ### 13. Portals
 - It allows us to render components outside the parent component DOM hierarchy.
 - 