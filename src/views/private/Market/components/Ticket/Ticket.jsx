import React, { useContext } from 'react'
import { MarketContext } from 'containers/Market/MarketContextProvider'
import { parseFloatToCurrency } from 'helpers/parse'
import TicketDetailItem from '../TicketItem/TicketItem'
import BuyOrderButton from '../BuyOrderButton/BuyOrderButton'
import SeeDetails from './SeeDetails/SeeDetails'
import './Ticket.scss'

const Ticket = () => {
  const { products, results: { subtotal, iva, total } } = useContext(MarketContext)

  return (
    products.length > 0 && (
      <div className="ticket rounded mt-auto mb-2 mr-2">
        <SeeDetails />
        <div className="pb-2 px-2">
          <TicketDetailItem
            containerClass="mb-0"
            itemName="Subtotal"
            itemNameClass="font-weight-bold"
            value={`${parseFloatToCurrency(subtotal)}`}
            valueClass="font-weight-bold"
          />

          <TicketDetailItem
            containerClass="mb-0"
            itemName="IVA"
            itemNameClass="font-weight-bold"
            value={`${parseFloatToCurrency(iva)}`}
            valueClass="font-weight-bold"
          />

          <TicketDetailItem
            containerClass="ticket__total mb-0"
            itemName="Total"
            itemNameClass="font-weight-bold"
            value={`${parseFloatToCurrency(total)}`}
            valueClass="font-weight-bold"
          />

          <BuyOrderButton />
        </div>
      </div>
    )
  )
}

export default Ticket
