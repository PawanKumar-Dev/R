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


- If logic code is big, move the logic outside of the JSX.
- Variables, maths operations, function calls, terniary operator and logical operator(&&) can be used inside JS expression {}
- IIFE can be run as well.


- Remember we cannot use statements (like loops or if statements) directly inside JSX.