# Reconciliation

- Everytime state or props change, React creates a new Virtual DOM tree reflecting new updates.
- Then React compares the new Virtual DOM tree with the previous one using a process called reconciliation.
- Also known as "Diffing Algorithm"


- When rendering lists, React uses "key" attributes to track elements. Proper keys help React identify which items have changed, enabling efficient reordering or updates.
- Hence using "key" in list is always best choice.

           [State/Props Update]
                    │
                    ▼
       [React Re-renders Component]
                    │
                    ▼
       [New Virtual DOM Tree Created]
                    │
                    ▼    (Diffing Algorithm)
          [Compare with Old Virtual DOM]
                    │
                    ▼ 
      [Determine Minimal Set of Changes]
                    │
                    ▼
       [Batch Update Real DOM Efficiently]
