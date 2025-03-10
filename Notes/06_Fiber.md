# React Fiber:

- "Reconciliation" was updated with React Fiber(React 16).
- Fiber makes rendering in React both asynchronous and incremental.

- Prior to Fiber, React's rendering was synchronous and could lead to bottlenecks in complex apps.

- React Fiber divides the rendering process into small units of work called "Fiber nodes".
- Each "Fiber node" is assigned a priority level:
  - High Priority: User input, animations.
  - Low Priority: Data fetching, logging.

- Then React process "Fiber nodes", working on the highest priority tasks first.
  - If a higher priority task comes in, React can pause the current work.
  - React handles the urgent task, ensuring a smooth user experience.
  - React returns to the paused tasks and continues rendering.

- With Fiber our UI don't freeze, prioritze UI experience and updates incrementally.

```
         [User Interaction / Data Change]
                     │
                     ▼
          [New Update Triggers Reconciliation]
                     │
                     ▼
         [React Creates New Virtual DOM Tree]
                     │
                     ▼
          [Divide Work into Fiber Nodes]
                     │
         ┌───────────┴───────────┐
         ▼                       ▼
  [High Priority Fiber]    [Low Priority Fiber]
    (e.g., User Input)        (e.g., Data Fetching)
         │                       │
         └───────────┬───────────┘
                     ▼
        [Interruptible, Incremental Rendering]
                     │
                     ▼
         [Batch Updates Applied to the Real DOM]
                     │
                     ▼
               [Smooth UI Updates]
```
