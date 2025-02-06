# useRef Hook

- "useRef Hook" is a way to hold data value or a reference tucked away, safe and sound, throughout the lifecycle of your component.

- Why not "useState hook" then? Since both state and refs can hold data.
  - When state is updated it triggers a re-render of component.
  - Refs can change without causing any re-renders.

- Becoz "useRef Hook" can hold data across re-renders. This allows:
  - Storing mutable values that don't affect the UI.
  - Holding DOM element references.