
import { Outlet,Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="flex justify-center items-center gap-4 px-8 py-4">
      <Link className='text-xl font-bold underline'  to='men'>Men</Link>
      <Link className='text-xl font-bold underline' to='women'>Women</Link>
      <Outlet/>
    </div>
  )
}

export default Products