import "./App.css";
import { useEffect, useState } from "react";
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
  );
}

export default App;
