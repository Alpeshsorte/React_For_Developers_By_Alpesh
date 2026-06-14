React Development is a vast topic. Here's a structured roadmap covering the most important concepts from beginner to advanced.
1. What is React?
React is a JavaScript library created by Meta Platforms for building user interfaces, especially Single Page Applications (SPAs).
Features
Component-based architecture
Virtual DOM
Reusable UI components
Fast rendering
Declarative programming
2. Prerequisites
Before learning React, know:
HTML
Forms
Tables
Semantic tags
CSS
Flexbox
Grid
Responsive Design
JavaScript (Very Important)
Variables (let, const)
Functions
Arrow Functions
Objects
Arrays
Destructuring
Spread Operator (...)
Template Literals
Promises
Async/Await
ES6 Modules
Example:
JavaScript
const user = {
  name: "Alpesh",
  age: 22
};

const { name } = user;

console.log(name);
3. Setting Up React
Using Vite (Recommended)
Bash
npm create vite@latest my-app
cd my-app
npm install
npm run dev
Project Structure
Plain text
src/
 ├── components/
 ├── App.jsx
 ├── main.jsx
 └── assets/
4. JSX
JSX = JavaScript XML
JSX
function App() {
  return (
    <h1>Hello React</h1>
  );
}
Rules
Return one parent element.
Use className instead of class.
Use {} for JavaScript expressions.
JSX
const name = "Alpesh";

<h1>Hello {name}</h1>
5. Components
Components are reusable UI pieces.
Functional Component
JSX
function Welcome() {
  return <h1>Welcome</h1>;
}
Using Component
JSX
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
6. Props
Props transfer data from parent to child.
Parent
JSX
<Card name="Laptop" price="50000" />
Child
JSX
function Card(props) {
  return (
    <h2>{props.name}</h2>
  );
}
Destructuring
JSX
function Card({name, price}) {
  return (
    <>
      <h2>{name}</h2>
      <p>{price}</p>
    </>
  );
}
7. State
State stores dynamic data.
JSX
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </>
  );
}
8. Event Handling
JSX
function App() {
  const handleClick = () => {
    alert("Clicked");
  };

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}
9. Conditional Rendering
if
JSX
if(isLoggedIn){
  return <Home />;
}
return <Login />;
Ternary Operator
JSX
{
  isLoggedIn
  ? <Home />
  : <Login />
}
AND Operator
JSX
{
  isAdmin && <Dashboard />
}
10. Lists and Keys
JSX
const users = ["Ram", "Shyam", "Mohan"];

return (
  <>
    {users.map((user,index) => (
      <li key={index}>{user}</li>
    ))}
  </>
);
Better:
JSX
<li key={user.id}>{user.name}</li>
11. Forms
Controlled Component
JSX
import { useState } from 'react';

function Form() {

  const [name, setName] = useState('');

  return (
    <>
      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <h2>{name}</h2>
    </>
  );
}
12. useEffect Hook
Used for side effects.
JSX
import { useEffect } from 'react';

useEffect(() => {
  console.log("Component Mounted");
}, []);
Dependency Array
JSX
useEffect(() => {
  console.log(count);
}, [count]);
13. React Hooks
useState
JSX
const [count,setCount] = useState(0);
useEffect
JSX
useEffect(()=>{},[]);
useRef
JSX
const inputRef = useRef();
useMemo
JSX
const result = useMemo(
  ()=>calculate(),
  [data]
);
useCallback
JSX
const fn = useCallback(
 ()=>{},
 []
);
useContext
JSX
const value = useContext(UserContext);
Custom Hook
JSX
function useCounter() {
  const [count,setCount]=useState(0);

  return {count,setCount};
}
14. Component Lifecycle
Mounting
JSX
useEffect(()=>{
 console.log("Mounted");
},[]);
Updating
JSX
useEffect(()=>{
 console.log("Updated");
},[count]);
Unmounting
JSX
useEffect(()=>{
 return ()=>{
   console.log("Unmount");
 };
},[]);
15. Context API
Avoid prop drilling.
JSX
import { createContext } from 'react';

const UserContext = createContext();
Provider:
JSX
<UserContext.Provider value="Alpesh">
  <App />
</UserContext.Provider>
Consumer:
JSX
const user = useContext(UserContext);
16. React Router
Install:
Bash
npm install react-router-dom
Routes:
JSX
import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";
JSX
<BrowserRouter>
  <Routes>

    <Route
      path="/"
      element={<Home />}
    />

    <Route
      path="/about"
      element={<About />}
    />

  </Routes>
</BrowserRouter>
17. API Calls
Using Fetch:
JSX
useEffect(() => {

  fetch(
   "https://jsonplaceholder.typicode.com/users"
  )
  .then(res => res.json())
  .then(data => console.log(data));

}, []);
Using Axios:
Bash
npm install axios
JSX
import axios from 'axios';

axios.get(url)
.then(res=>console.log(res.data));
18. State Management
Context API
Small applications
Redux Toolkit
Large applications
Install:
Bash
npm install @reduxjs/toolkit react-redux
Concepts:
Store
Slice
Reducer
Action
Dispatch
19. Styling
CSS
JSX
import "./App.css";
Inline CSS
JSX
<h1 style={{color:"red"}}>
 Hello
</h1>
CSS Modules
JSX
import styles from './App.module.css';
Tailwind CSS
Popular modern approach.
JSX
<button className="bg-blue-500 p-2">
 Click
</button>
20. Performance Optimization
React.memo
JSX
export default React.memo(Card);
useMemo
JSX
const total =
useMemo(()=>sum(),[items]);
useCallback
JSX
const handleClick =
useCallback(()=>{},[]);
21. Folder Structure
Plain text
src
│
├── components
├── pages
├── hooks
├── context
├── services
├── assets
├── App.jsx
└── main.jsx
22. Common Interview Questions
What is React?
What is JSX?
What is Virtual DOM?
Difference between State and Props?
What is useState?
What is useEffect?
What is React Router?
What is Context API?
What is Redux?
What is React.memo?
What is Prop Drilling?
What are Hooks?
Controlled vs Uncontrolled Components?
Why use keys in lists?
What is reconciliation?
23. Projects to Build
Beginner
Counter App
Calculator
To-Do App
Weather App
Intermediate
Quiz App
Movie Search App
Expense Tracker
E-commerce Cart
Advanced
Social Media App
Learning Management System
Chat Application
Full-Stack React + Django Project
24. React + Django (Useful for You)
Frontend:
React
Axios
React Router
Backend:
Django
Django REST Framework
Flow:
Plain text
React UI
   ↓
Axios Request
   ↓
Django API
   ↓
Database
A strong React developer should be comfortable with:
Components
Props
State
Hooks
Forms
API Integration
React Router
Context API
Redux Toolkit
Performance Optimization
React + Django Integration
Building and deploying real projects
If you're preparing for React interviews as a fresher, I can also provide a 100+ React interview questions and answers sheet from basic to advanced.
