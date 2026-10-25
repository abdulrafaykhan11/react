import { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [theme, settheme] = useState("light");

  return (
    <div>
      <Navbar theme={theme}>
        <h2>Wow</h2>
        <h2>Wowwww</h2>
      </Navbar>
    </div>
  );
};

export default App;
