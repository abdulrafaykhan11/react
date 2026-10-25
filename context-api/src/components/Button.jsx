import { useContext } from "react"
import { themeData } from "../context/ThemeContext"
const Button = () => {
    
  const [theme,settheme] = useContext(themeData)

  const themeChange = () => {
    settheme('dark')
  }
  return (
    <div>
        <button onClick={themeChange}>Change Theme {theme}</button>
    </div>
  )
}

export default Button