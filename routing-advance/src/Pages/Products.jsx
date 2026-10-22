
import { Outlet,Link } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <Link to='men'>Men</Link>
      <Link to='women'>Women</Link>
      <Outlet/>
    </div>
  )
}

export default Products