import { useState } from 'react'

import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../../data'
import { FaUserAlt } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'

import Logo from '../../assets/logo.png'

import './navbar.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  const handleNavLinkClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav>
      <div className="nav_container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Musical Logo" />
        </Link>
        <ul className="nav_links">
          {navLinks.map((link) => {
            const { id, path, icon } = link
            return (
              <li key={id} className="links">
                <NavLink
                  to={path}
                  className={isActive ? 'active' : ''}
                  onClick={handleNavLinkClick}
                >
                  {icon}
                </NavLink>
              </li>
            )
          })}
        </ul>
        <div className="profile">
          <Link to="/profile" className="profile_link">
            <FaUserAlt />
          </Link>
          <Link to="/log" className="profile_link">
            <BiLogOut />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
