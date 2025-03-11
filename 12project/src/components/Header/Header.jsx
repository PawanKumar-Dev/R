import { Container, Logout } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]
  return (
    <>
      <header class="bg-white shadow-md">
        <Container>
          <div class="flex justify-between items-center py-4">
            <Link to="/" class="text-2xl font-bold text-gray-800">MyBrand</Link>

            <nav class="hidden md:flex space-x-6">
              {navItems.map(() => navItems.active ? (
                <li key={item.name}><button onClick={() => navigate(item.slug)}>{item.name}</button></li>
              ) : null)}
            </nav>

            {authStatus && (
              <Logout />
            )}
          </div>
        </Container>
      </header>

    </>
  )
}

export default Header