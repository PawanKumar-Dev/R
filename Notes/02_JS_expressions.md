# JavaScript Expression

- Evaluated expressions refer to JS expressions that are calculated and rendered within your JSX code. JSX allows you to write HTML-like syntax directly in JS file and integrate dynamic data into UI.

- Expressions vs. Statements:
  - Expressions: Return a value and can be embedded in JSX. 
    `<p>{items.length}</p>`

  - Statements: Perform actions but don't return a value directly and cannot be embedded in JSX.
    ```
    <div>
      {if (isLoggedIn) { return <p>Welcome back!</p>; }}
    </div>