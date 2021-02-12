import React, { useState, useRef } from 'react'
import Layout from 'layout/Layout'
import SelectedProducts from './components/SelectedProducts/SelectedProducts'
import MovilTicketBar from './components/MovilTicketBar/MovilTicketBar'
import TicketSideBar from './components/TicketSideBar/TicketSideBar'
import TableMarket from './components/TableMarket/TableMarket'
import './Market.scss'

const Market = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(false)
  const marketTableRef = useRef()

  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen)

  const handlerDeselect = (id) => marketTableRef.current.handlerDeselectProduct(id)

  return (
    <Layout className="d-flex pr-lg-0 pb-0 market">
      <div className="market__table pt-3">
        <TableMarket ref={marketTableRef} />
      </div>
      <div className="flex-1 pl-3 d-none d-lg-flex flex-column">
        <SelectedProducts deselectRow={handlerDeselect} />
      </div>
      <MovilTicketBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />

      <TicketSideBar deselectRow={handlerDeselect} isOpen={sidebarIsOpen} />
    </Layout>
  )
}

export default Market
