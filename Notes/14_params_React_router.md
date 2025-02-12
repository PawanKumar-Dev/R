# Params in React Router

- When using React Router DOM, we can pass parameters/data via url as well using "useParams".
  `<Route path="/services/:urlid" element={<Services />} />`

- Then access the "urlid" in specified page.
  ```
  import { useParams } from "react-router"

  const Services = () => {
    const { urlid } = useParams()
    return (
      <>
        <h2>Services</h2>
        <p>Passed Data: {urlid}</p>
      </>
    )
  }
  export default Services
  ```