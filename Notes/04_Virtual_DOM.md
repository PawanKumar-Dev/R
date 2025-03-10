# Virtual DOM

- Lightweight copy of the real DOM that React keeps in memory to optimize UI updates.
- Technically, Virtual DOM is an "in-memory representation" used for diffing and batching updates.

- Becoz, manipulating the real DOM directly is slow and inefficient.
- This happens becoz browser always take time to repaint and reflow the layout with each small change.

- React solves this with V-DOM.
- React applies all changes to V-DOM first.
- Then efficiently updates the real DOM in a "batch process".

```
   [User Interaction]
           │
           ▼
   [React Component State Change]
           │
           ▼
   [Virtual DOM Update]
           │
   (Reconciliation: Diff between new & old Virtual DOM)
           │
           ▼
   [Batch Processing of Changes]
           │
           ▼
   [Efficient Update of the Real DOM]
           │
           ▼
   [Browser Reflow & Repaint]
```
