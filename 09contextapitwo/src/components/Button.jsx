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