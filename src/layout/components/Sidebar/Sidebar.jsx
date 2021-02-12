import React, { useContext } from 'react'
import classNames from 'classnames'
import { Nav } from 'reactstrap'
import { UserContext } from 'containers/User/UserContext'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faStore, faStoreSlash } from '@fortawesome/free-solid-svg-icons'
import NavbarItem from '../NavbarItem/NavbarItem'

const Sidebar = ({ isOpen, toggle }) => {
  const { defaultStore, storeName, onLogout } = useContext(UserContext)
  const sidebarClasses = classNames('d-lg-none d-xl-none sidebar position-fixed h-100 ', { 'is-open': isOpen })

  const handlerToggle = (e) => {
    e.preventDefault()
    toggle()
  }

  const onSignOut = (e) => {
    e.preventDefault()
    onLogout()
  }

  return (
    <div className={sidebarClasses}>
      <div className="sidebar-header">
        <a href="#exit" onClick={handlerToggle} className="buttonexit float-right position-relative m-3 text-primary">
          &times;
        </a>
      </div>
      <div className="side-menu">
        <div className="nav-store navbar-item py-1 px-3 nav-item">
          <Link to="/admin/inicio" className="text-decoration-none font-weight-bold text-uppercase word nav-link">
            <FontAwesomeIcon className="mr-2" icon={storeName ? faStore : faStoreSlash} size="lg" />
            {storeName}
          </Link>
        </div>
        <Nav vertical className="list-unstyled pb-3">
          {
            defaultStore && (
              <>
                <NavbarItem
                  goTo="vender"
                  icon="money-bill"
                  linkClass="word font-weight-bold nav-link text-primary"
                  text="Vender"
                  navItemClass="side-hover mt-1"
                />
                <NavbarItem
                  goTo="ganancias"
                  icon="chart-line"
                  linkClass="word font-weight-bold nav-link text-primary"
                  text="Ganacias"
                  navItemClass="side-hover mt-1"
                />
                <NavbarItem
                  goTo="inventario"
                  icon="boxes"
                  linkClass="word font-weight-bold nav-link text-primary"
                  text="Inventario"
                  navItemClass="side-hover mt-1"
                />
                <NavbarItem
                  goTo="proveedores"
                  icon="truck"
                  linkClass="word font-weight-bold nav-link text-primary"
                  text="Proveedores"
                  navItemClass="side-hover mt-1"
                />
              </>
            )
          }
        </Nav>
      </div>
      <a className="ml-3 px-3 mt-auto font-weight-bold text-secondary" href="#signOut" onClick={onSignOut}>
        Salir <FontAwesomeIcon icon={faSignOutAlt} color="#C84845" size="lg" />
      </a>
    </div>
  )
}

export default Sidebar
