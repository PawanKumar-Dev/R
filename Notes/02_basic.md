# Hooks - use

- When we create normal counter with classic JS concept. We see our variable is updated. But in UI updated data is not shown. This happens becoz all UI changes are controlled by React itself. (03counterhook - App.jsx)


- By "array destructuring", we assign two returned values to variables with meaningful names.
  - [ currentStateValue, stateUpdaterFunction] = useState(0)


- In useState() we can pass anything we want initally like: ('') or (0) etc.


- When you use "useState", you're telling React to remember a piece of data (the state) and automatically re-render the component whenever that data changes.
  e.g: let [count, setCount] = useState(0);


- "useState hook" returns an "Array" with two items:
  1. Current State Value (count): This holds the current value of your state variable.
  2. Function to Update the State (setCount): Calling this function updates the state and causes React to re-render the component to reflect the new state.(03counterhook - AppTwo.jsx)