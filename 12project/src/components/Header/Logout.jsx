import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from "../../store/authSlice"

const Logout = () => {
    const dispatch = useDispatch()

    function logOutHandler() {
        authService.logOut().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75" onClick={logOutHandler}>
            Logout
        </button>
    )
}

export default Logout