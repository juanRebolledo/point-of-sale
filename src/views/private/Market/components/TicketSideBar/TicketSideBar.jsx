import React from 'react'
import classNames from 'classnames'
import './TicketSideBar.scss'
import SelectedProducts from '../SelectedProducts/SelectedProducts'

const TicketSideBar = ({ deselectRow, isOpen }) => {
  const sidebarClasses = classNames('sidebare d-lg-none', { 'is-open': isOpen })

  return (
    <div className={sidebarClasses}>
      <div className="ticket-siderbar d-flex justify-content-end">
        <div className="container-ticket p-4 position-fixed h-100">
          <div className="product-ticket py-2">
            <SelectedProducts deselectRow={deselectRow} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketSideBar
