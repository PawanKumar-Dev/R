# useEffect Hook

- At its core, useEffect tells React: Once you've updated the DOM, run this code.

- "useEffect" hook runs after every render. It's like setting an alarm that goes off every time something changes.

- To fine-tune when your "useEffect" runs, we use a dependency array:
  ```
  useEffect(() => {
    // Runs only when 'count' changes
  }, [count]);
  ```

- Dependencies act as triggers. So hooks runs only when the specified variables change.

- If an empty array [] passed. Hook runs once after the initial render.
