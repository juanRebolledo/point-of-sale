import React, { useState } from 'react'
import cnames from 'classnames'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

const Layout = ({ children, className }) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false)
  const classes = cnames('container-app', className)

  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen)

  return (
    <div className="d-flex flex-column h-100">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <div className={classes}>
        {children}
      </div>
    </div>
  )
}

export default Layout
