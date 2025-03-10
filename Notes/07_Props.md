# Props

- Props make our React component reusable. And passing data through props to other component is also possible.

- Data like string can be passed directly.
  ```
  <Greeting message="Hello World!" />
  ```
  
- But data like number, objects, array must be passed as variable wrapped in {}
  ```
  const age = 25;
  const user = { name: "Alex", occupation: "Engineer" };
  const items = [1, 2, 3];

  <UserCard age={age} user={user} items={items} />
  ```

- Then we can access via format {props.variable}
  ```
  function UserCard(props) {
    return (
      <div>
        <h2>{props.user.name}</h2>
        <p>Age: {props.age}</p>
      </div>
    );
  }
  ```

- We can apply destructing on props and simplify things further.
  ```
  function UserCard({ user, age }) {
    return (
      <div>
        <h2>{user.name}</h2>
        <p>Age: {age}</p>
      </div>
    );
  }
  ```

- You can also pass default value to these props when destructuring.
  - e.g., ({ age=15 })
