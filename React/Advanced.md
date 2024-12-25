# Higher-Order Component (HOC) in React

### What is a HOC?

- A Higher-Order Component (HOC) is a function that takes a component as input and returns a new component with added functionality.
- It is used to reuse logic across multiple components.

### How HOCs Work?

- Input: Takes a component (e.g., ComponentA).
- Enhancement: Adds extra logic or functionality.
- Output: Returns a new component with the original behavior plus the added functionality.

```
const withExtraProps = (WrappedComponent) => {
  return (props) => <WrappedComponent {...props} additionalProp="Extra Value" />;
};
```

```
const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = true; // Logic
    return isLoggedIn ? <WrappedComponent {...props} /> : <div>Please log in</div>;
  };
};

const Dashboard = () => <h1>Dashboard</h1>;
const ProtectedDashboard = withAuth(Dashboard);

// Usage
<ProtectedDashboard />;
```

### Why Use HOCs?

- Reusability: Share logic without duplicating code.
- Abstraction: Keep components clean by abstracting additional functionality.
- Props Injection: Easily inject extra props into components.

### Common Use Cases

- Authentication: Restrict access to certain components.
- Logging: Track user interactions or log props.
- Analytics: Add tracking functionality.

### Important Points

- Always forward props using {...props}.
- Name HOCs with a prefix like withSomething (e.g., withAuth).
- Avoid overusing HOCs—they can lead to nested components.

# Server-Side Rendering (SSR):

### 1. Initial Request:

User sends a request to the server by accessing a URL.

### 2. Processing on Server:

- The server sends a fully-formed HTML page with CSS applied, so the user sees a styled, static page.
- JavaScript is not executed on the server. It is sent to the browser for hydration (to make it work) to make the page interactive.


### 3. Delivery to Browser:

The fully-formed HTML page is sent to the browser.

### 4. Rendering in Browser:

The browser directly displays the content to the user.

### 5. Subsequent Interactions:

For navigation or interaction, new requests may go to the server again, or additional JavaScript might enhance the page (hydration).

# Client-Side Rendering (CSR):

### 1. Initial Request:

User sends a request to the server by accessing a URL.

### 2. Response from Server:

The server sends a minimal HTML page, typically with an empty <div> and a link to JavaScript files.

### 3. JavaScript Execution:

The browser downloads and executes JavaScript files.

### 4. Data Fetching in Browser:

The browser fetches data (e.g., via APIs) and dynamically builds the HTML.

### 5. Rendering in Browser:

The final page is displayed only after JavaScript has finished processing.

# Flow of SSR vs CSR
- SSR:
  - Request → Server generates HTML → Send to browser → Render content.
- CSR:
  - Request → Server sends empty shell + JavaScript → Browser executes JS → Fetch data → Render content.

# Key Differences:
1. Performance:
   - SSR: Faster initial load; content is visible immediately.
   - CSR: Slower initial load due to JavaScript execution.
2. SEO:
   - SSR: Better SEO since search engines can index pre-rendered content.
   - CSR: Needs extra configuration (e.g., pre-rendering) for SEO.
3. Interactivity:
   - SSR: Initial rendering is faster, but interactions may need server round-trips.
   - CSR: Interactions are quicker once the page is fully loaded.
4. Complexity:
   - SSR: More server resources needed for rendering pages.
   - CSR: Heavier dependency on the client/browser for rendering.
5. Use Cases:
   - SSR: Blogs, e-commerce websites, and SEO-heavy pages.
   - CSR: Single-page applications (SPAs), dashboards, or applications with heavy interactivity.
