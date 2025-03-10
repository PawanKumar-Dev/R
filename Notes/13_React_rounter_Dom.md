# React Router DOM

- React Router DOM is an additional library. Not part of core React.

- React Router DOM let you handle routing by mapping URLs to different components in your app without any reloads.
  ```
  npm install react-router-dom
  ```

- "Link" is key part of navigation. Allows you to create hyperlinks we can click on to navigate application without triggering a full page reload.


- "NavLink" allows you to create nav links while also giving you the ability to add styling to indicate the active state of the link.
  ```
  <NavLink to="/" className={({ isActive }) => `font-medium ${isActive ? 'text-amber-950' : 'text-white'} transition`}>Home</NavLink>
  ```

- To create the routes we can use:
  ```
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { RouterProvider, createBrowserRouter } from "react-router-dom";
  import App from './App.jsx'
  import About from './components/About.jsx'
  import Services from './components/Services.jsx'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: "about",
          element: <About />
        },
        {
          path: "services",
          element: <Services />
        },
      ]
    }
  ])

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
  ```


- You can also create these routes this way:
  ```
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
  import App from './App.jsx'
  import About from './components/About.jsx'

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} >
        <Route path="/about" element={<About />} />
      </Route>
    )
  )

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
  ```


- To show data we use "outlet"
  ```
  import Header from './components/Header'
  import { Outlet } from "react-router";

  function App() {
    return (
      <>
        <Header />
        <h2>Homepage</h2>
        <Outlet />
      </>
    )
  }
  export default App
  ```
