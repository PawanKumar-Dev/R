# Details of context API 2nd way

- This is another way to write context api. Both ways are correct only style difference.

- In this way write all our context api related code in single file "context/ThemeContext.js".
    ```
    import React, { createContext, useContext } from "react";

    export const ThemeContext = createContext({
        themeMode: "light",
        lightTheme: () => {},
        darkTheme: () => {},
    });

    export const ThemeProvider = ThemeContext.Provider;

    export default function useTheme() {
        return useContext(ThemeContext);
    }
    ```

- In above file we pass our "global data" into to "createContext()" method.
- We only defined our methods lightTheme()/darkTheme() here. Logic of methods can be defined where we access these methods.

- We also exported our provider and then used the hook "useContext". We can access this using "useTheme()" function.
    ```
    import "./App.css";
    import { useState } from "react";
    import Button from "./components/Button";
    import Profile from "./components/Profile";
    import { ThemeProvider } from "./context/ThemeContext";

    function App() {
    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }
    return (
        <>
            <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
                <Button/>
                <Profile/>
            </ThemeProvider>
        </>
        )
    }
    export default App;
    ```

- Profile.jsx component is accessing our "themeMode".
    ```
    import useTheme from "../context/ThemeContext";

    const Profile = () => {
    const { themeMode } = useTheme();

    return (
        <div className={themeMode}>
        <h1>Profile Data</h1>
        <p>Just some dummy data</p>
        </div>
        );
    }
    export default Profile;
    ```

- We can set data in button.jsx using context api.
    ```
    import useTheme from '../context/ThemeContext'

    const Button = () => {
        const {themeMode, lightTheme, darkTheme} =  useTheme()

        function toggleTheme() {
            if(themeMode === "light") {
                darkTheme()
            } else {
                lightTheme()
            }
        }
        
        return (
            <div>
                <button onClick={toggleTheme}>Toggle</button>
            </div>
        )
    }
    export default Button
    ```
