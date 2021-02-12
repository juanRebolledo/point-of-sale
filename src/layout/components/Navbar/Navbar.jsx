import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft, faSignOutAlt, faStore, faStoreSlash } from '@fortawesome/free-solid-svg-icons'
import { Button, Navbar as NavbarBootstrap, Nav } from 'reactstrap'
import { UserContext } from 'containers/User/UserContext'
import NavbarItem from 'layout/components/NavbarItem/NavbarItem'
import './Navbar.scss'

const Navbar = ({ toggleSidebar }) => {
  const { defaultStore, storeName, onLogout } = useContext(UserContext)

  const onSignOut = (e) => {
    e.preventDefault()
    onLogout()
  }

  return (
    <NavbarBootstrap light className="navbar rounded shadow-sm px-4 py-3" expand="lg">
      <div className="nav-store">
        <Link to="/admin/inicio" className="h-100 font-weight-bold d-flex align-items-center">
          <FontAwesomeIcon className="mr-2" icon={storeName ? faStore : faStoreSlash} size="lg" />
          {storeName}
        </Link>
      </div>

      <Button className="d-lg-none d-block ml-auto" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>

      <Nav className="d-lg-flex d-none ml-auto align-items-center" navbar>
        {defaultStore && (
          <>
            <NavbarItem goTo="vender" icon="money-bill" text="Vender" />

            <NavbarItem goTo="ganancias" icon="chart-line" text="Ganancias" />

            <NavbarItem goTo="inventario" icon="boxes" text="Inventario" />

            <NavbarItem goTo="proveedores" icon="truck" text="Proveedores" />
          </>
        )}

        <a className="ml-3" href="#signOut" onClick={onSignOut}>
          <FontAwesomeIcon icon={faSignOutAlt} color="#C84845" size="lg" />
        </a>
      </Nav>
    </NavbarBootstrap>
  )
}

export default Navbar
