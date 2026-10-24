import { useState } from "react"
import Navbar from "./components/Navbar"

const App = () => {

  const [theme, settheme] = useState('Light')

  return (
    <div>
      <h1>The theme is {theme}</h1>

      <Navbar theme={theme} settheme = {settheme} />
    </div>
  )
}

export default App