
import { useContext } from "react"
import Nav2 from "./Nav2"
import { themeData } from "../context/ThemeContext"

const Navbar = () => {

const [theme] = useContext(themeData)
  return (
    <div className={theme}>
        <h1>Abdul Rafay</h1>
        <Nav2  />
    </div>
  )
}

export default Navbar