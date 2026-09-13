# DevStack

- live link - https://devstackss.netlify.app/

- Dev Stack is a responsive website where developers can explore technologies and build their ideal development stack.

##  Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- React Icons
- JSON
- Vite
- Git & GitHub

##  Features

-  Browse different frontend, backend, database, language, and DevOps technologies with ratings and difficulty levels.

-   Add technologies to your personal stack and remove them whenever needed.

-   Get toast notifications when adding, removing, or trying to add a duplicate technology.



##  React Questions & Answers

### I. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.
It makes React components easier to read and write.

### II. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.
State is used to store and manage data that can change inside a component.

### III. What does the useState hook do, and where did you use it in this project?

useState lets us create and manage state in a React component.
In this project, I used it to manage the technology list, selected stack, and loading state.

### IV. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect runs code after a component renders or when specific data changes.
I used it to fetch the technology data from the JSON file when the Technology section loads.

### V. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list.
It allows React to update the list efficiently when items are added, removed, or changed.

### VI. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.
I used it in the Your Stack section to show an empty message when no technology is selected.

### VII. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props.
A child can send information back by calling a function passed from the parent as a prop.