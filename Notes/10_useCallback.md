# useCallback Hook

- useCallback is a way to prevent unnecessary work by "caching" your functions.

- In React, components re-render when their props or state change. Every time a component re-renders, any functions defined inside it are recreated.

- This can lead to performance issues sometimes. And to optimize this, we use "useCallback".
  ```
  const cachedFunction = useCallback(
    () => {
      // Your function logic
    },
    [dependencies]
  )
  ```

- useCallback hook cache this "callback function" and only re-render this function if dependencies change. This make our UI render way fast.
