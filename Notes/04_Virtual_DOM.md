# Virtual DOM

- Lightweight copy of the real DOM that React keeps in memory to optimize UI updates.

- Becoz, manipulating the real DOM directly is slow and inefficient because the DOM APIs are often bulky. And browser to repaint and reflow the layout with each change.

- React solves this with V-DOM. It apply all changes to V-DOM first. Then efficiently updates the real DOM in a "batch process".