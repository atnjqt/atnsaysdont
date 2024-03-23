import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from '../apple_cage.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <div className="container-navbar">
      <div className='logo'>
        <Brand />
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
            <li>
              <NavLink to="/saapato">saapato</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar