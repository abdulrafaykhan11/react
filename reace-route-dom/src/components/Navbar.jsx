import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>WebPage</h1>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
    </div>
  )
}

export default Navbar