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