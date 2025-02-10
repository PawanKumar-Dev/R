import { Link, NavLink } from "react-router"

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-extrabold">MyBrand</Link>

        <ul className="hidden md:flex space-x-8">
          <li><NavLink to="/" className={({ isActive }) => `font-medium hover:text-yellow-400 ${isActive ? 'text-amber-950' : 'text-white'} transition duration-300`}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => `font-medium hover:text-yellow-400 ${isActive ? 'text-amber-950' : 'text-white'} transition duration-300`}>About</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => `font-medium hover:text-yellow-400 ${isActive ? 'text-amber-950' : 'text-white'} transition duration-300`}>Services</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => `font-medium hover:text-yellow-400 ${isActive ? 'text-amber-950' : 'text-white'} transition duration-300`}>Contact</NavLink></li>
        </ul>

        <button className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Header