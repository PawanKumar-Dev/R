# Details of context API

- We seprate our all context in seprate folder "context".
- Our context depends upon what code we are sharing like for user data sharing: "UserContext.js" OR for post sharing: "PostContext.js"

- "React.createContext()" method is similar to any hook provided to us by React.
    ```
    import React from "react"
    const UserContext = React.createContext()
    export default UserContext
    ```

- Then create "UserContextProvider.jsx" file that consume our context.
    ```
    import React from "react";
    import { useState } from "react";
    import { UserContext } from "./UserContext.js";

    const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>;
    };

    export default UserContextProvider;
    ```

- We attach this provider to top level element of our app in "app.jsx". This gives access of provider data to all inner components. 
  ```
  import Login from "./components/Login";
  import Profile from "./components/Profile";
  import UserContextProvider from "./context/UserContextProvider";

  function App() {
    return (
        <UserContextProvider>
            <Login />
            <Profile />
        </UserContextProvider>
  );
  }
  export default App;
  ```

- We use "useContext" hook to access the data we stored in our context. Which act like a global variable essentially.
    ```
    import React, { useContext } from "react";
    import UserContext from "../context/UserContext";

    const Profile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Plz Login</div>;
    }
    return <div>Welcome, {user.username} : {user.password}</div>;
    };

    export default Profile;
    ```


- We can also set/send data using "useContext" hook.
    ```
    import React, { useState, useContext } from "react"
    import UserContext from "../context/UserContext"

    const Login = () => {
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")

        const { setUser } = useContext(UserContext)

        const handleSubmit = (e) => {
            e.preventDefault()
            setUser({ username, password })
        }

        return (
            <>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </>
        )
    }
    export default Login
