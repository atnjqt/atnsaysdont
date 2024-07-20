import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from '../apple_cage.svg'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar"> 
      <div className="container-navbar">
        <div className='logo'>
        <a href="/" target="_blank">
          <Brand />
        </a>
        </div>
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/promo">dj sets</NavLink>
          </li>
          <li>
            <NavLink to="/potatohead">potatohead</NavLink>
          </li>
          <li>
            <NavLink to="/demo">saysdont</NavLink>
          </li>
          <li>
          <NavLink to="/buttafly">buttafly</NavLink>
          </li>
          <li>
          <NavLink to="/saapato">saapato</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  )
}

export default Navbar