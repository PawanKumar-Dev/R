# useCallback Hook

- useCallback is a way to prevent unnecessary work by "caching" your functions.

- In React, components re-render when their props or state change. Every time a component re-renders, any functions defined inside it are recreated.

- This can lead to performance issues sometimes. And to optimize this, we use "useCallback".
  ```
  import { useCallback } from 'react'

  const MyComponent = ({ someProp }) => {
    const memoizedFunction = useCallback(() => {
      // your logic here
    }, [someProp]); // Only re-create the function when `someProp` changes.
  
    return (
      <div>
        {/* Use your function as needed */}
      </div>
    )
  }
  ```

- useCallback hook cache this "callback function" and only re-render this function if dependencies change. This make our UI render way fast.
