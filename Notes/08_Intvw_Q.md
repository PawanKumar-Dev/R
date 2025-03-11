# What is Batch update

- Below code in counter doesn't update our counter by four.
  ```
  const upCounter = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }
  ```

- Becoz of how React batches state updates for performance optimization.

- When you call setCount(count + 1) multiple times in the same function, React doesn't update count immediately after each call.

- React's state updates are asynchronous and may not happen immediately. This design helps with performance.

- To make above code workable, we need to tap in "prevcount", which will call state update everytime.
  ```
  const upCounterTwo = () => {
    setCount((prevcount)=>prevcount + 1)
    setCount((prevcount)=>prevcount + 1)
    setCount((prevcount)=>prevcount + 1)
    setCount((prevcount)=>prevcount + 1)
  }
  ```
