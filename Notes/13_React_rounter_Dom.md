# React Router DOM

- React Router Dom is an additional library. Lets you handle routing by mapping URLs to different components in your application without any reloads.
  - Refer here: [Installation in Main.jsx](https://reactrouter.com/start/library/installation)

- "Link" is key part of navigation. Allows you to create hyperlinks we can click on to navigate application without triggering a full page reload.

- "NavLink" allows you to create nav links while also giving you the ability to add styling to indicate the active state of the link.
  ```
  <NavLink to="/" className={({ isActive }) => `font-medium ${isActive ? 'text-amber-950' : 'text-white'} transition`}>Home</NavLink>
  ```

- 