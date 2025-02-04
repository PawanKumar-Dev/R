# Props

- Props make our React component reusable. And passing data through props to other component is also possible.

- Data like string can be passed directly.
- But data like number, objects, array must be passed as variable like this: {variable}
- Then we can access via format {props.variable} or we can apply destructing on top and then use that.
  - e.g., ({ age })
- You can also pass default value to these props when destructuring.
  - e.g., ({ age=15 })