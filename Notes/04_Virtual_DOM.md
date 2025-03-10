# Virtual DOM

- Lightweight copy of the real DOM that React keeps in memory to optimize UI updates.

- Becoz, manipulating the real DOM directly is slow and inefficient. Because the DOM APIs of browser are often bulky.
- And browser always take time to repaint and reflow the layout with each small change.

- React solves this with V-DOM.
- React applies all changes to V-DOM first.
- Then efficiently updates the real DOM in a "batch process".
