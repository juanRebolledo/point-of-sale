import React, { useContext } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { NavItem } from 'reactstrap'
import { UserContext } from 'containers/User/UserContext'
import FontAwesomeIcon from 'shared/FontAwesomeIcon/FontAwesomeIcon'

import './NavbarItem.css'

const NavbarItem = ({ goTo, icon, linkClass, navItemClass, text }) => {
  const { defaultStore } = useContext(UserContext)
  const route = `/admin/${defaultStore}/${goTo}`

  const linkClasses = classNames('text-decoration-none text-uppercase', linkClass)
  const navItemClasses = classNames('navbar-item py-1 px-3', navItemClass)

  return (
    <NavItem className={navItemClasses}>
      <Link to={route} className={linkClasses}>
        <FontAwesomeIcon size="lg" icon={icon} className="mr-2" />
        {text}
      </Link>
    </NavItem>
  )
}

export default NavbarItem
