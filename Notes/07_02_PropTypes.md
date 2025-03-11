# PropTypes

- In larger projects, use "PropTypes" to validate props.

- For example, specify that certain props are required and must be of a specific type.
  ```
  import PropTypes from 'prop-types'

  function Greeting({ name, age = 15 }) {
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <p>Your age is {age}</p>
      </div>
    )
  }
  
  Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  }
  ```
