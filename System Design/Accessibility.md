# Accessibility (a11y)
- Website should accessible to all users.
- What?
- Why?
- AT (Assistive Technology)
- Accessibility Standards
- ARIA
- Screen Reader
- Focus Management
- Contrast Theme
- Tooling
- Examples
- Rap in hospitals for disabled people.

### What?
- Web accessibility means that people with disabilities can use the web (perceive, understand, navigate, interact and contribute to the web)
- The goal of web accessibility is to eliminate barriers that may prevent people with disabilities from interacting with or accessing information on the web.
- Web apps by default are accessible. HTML5 Sytax most of the time are accessible. It is we developers make it accessible.

 ### Types of Disabilties
 - Visual
 - Hearning
 - Motor:- Hand, Leg related
 - Neurological
 - Speech
 - Temporary :- any kind of surgery
 - Situational :- cannot hear when it is noisy, feeling blurry when going out in sunlight, cannot see certain colors.

 ### Assitive Technology
 - Keyboard :- Tab
 - Screen Readers
 - Mouse & Pointer Devices
 - Touch Screen Gestures
 - Screen Magnifiers (Zoom)

 ### Accessibility Standards
 - WCAG (Web Content Accessibility Guideline)
   - Level A (basic medium)
   - Level AA (intermediate medium)
   - Level AAA 

### WebAIM (WCAG Principles)
- Perceivable :- anyone can consume the information
- Operable :- fill the form, navigate the form
- Understandable
- Robust :- should follow the same standard to all devices.

### Third Party Screen Readers
- JAWS
- NVDA

### Testing Screen Readers
- Windows ( Ctrl + WinKey + Enter)
- Mac (Cmd + F5)
- Chrome Extension

### Accessibility for Screen Reader
- By Default Accessible HTML
  - Document Structure
    - ```<header>```
    - ```<nav>```
    - ```<main>```
    - ```<section>```
    - ```<article>```
    - ```<footer>```
  - Heading
    - ```<h1></h6>```
  - Lists
    - ```<ul><ol><li>```
  - Links and Button
    - ```<a><button>```
   - Form Elements
     - ```<label>, <input type="email">```
  - Tables
    - ```<caption><thead><tbody><tfoot><th><tr><td>```   
  - Images
    - ```<img alt="">```
  - Audio/Video
    - Transcript, Open Text Captions
  - CSS class hidden 
- ARIA(Accessible Rich Internet Application)
  -  Form: Labels
  - aria-label
  - aria-labelledby
  - aria-describedby
- Aria Categories
  - Roles: ```aria-role="button"```
  - Properties: ```aria-describedby="id-ref"```
  - States: ```aria-pressed="false"```
  
- Live Regions
  - ```aria-live: assertive | polite | off```

- Focus Management
  - Tab Navigation
  - Keyboard Shortcuts
  - Skip Links
  - Active Element
  - Tab Trapping
  - Page Navigation

- Tab Navigation (Defaults Tab Index)
  - ```<a>```
  - ```<button>```
  - ```<select>```
  - ```<textarea>```
  - ```<iframe>```
- Keyboard Shortcuts
  - Implement using JS
- Skip Links
  - To skip over Header links quickly. Jump right to the content
- Active Element 
  1. A modal is about to be opened.
  2. Store the current news item.
  ```const currentItem = document.activeElement```
  3. Open the modal
  4. On Modal close, refocus on the news item they had open
  ```currentItem.focus()```
- Tab Trapping
  - If modal is open, focus should always be inside modal.
- Page Navigation
  - Skip Links
  - aria-live
  - contentElement.focus()  

