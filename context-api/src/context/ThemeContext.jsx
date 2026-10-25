import { createContext, useState } from "react" 

export const themeData = createContext()
const ThemeContext = (props) => {
  const [theme, settheme] = useState('light')
  return (
    <div>
      <themeData.Provider value={[theme,settheme]}>
      {props.children}
      </themeData.Provider>
      </div>
  )
}
export default ThemeContext