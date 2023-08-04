import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <div className="logo">
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/promo">promo</NavLink>
            </li>
            <li>
              <NavLink to="/potatohead">potatohead</NavLink>
            </li>
            <li>
              <NavLink to="/demo">demo</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar