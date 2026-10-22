import Home from "./Pages/Home";
import Abour from "./Pages/Abour";
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Notfound from "./Pages/Notfound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Abour />} path="/about" />
        <Route element={<Products />} path="/products">
          <Route element={<Men/>} path="men"/>
          <Route element={<Women/>} path="women"/>
        </Route>
        <Route element={<Notfound />} path="*" />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
