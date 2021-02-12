import React, { useState, useContext } from 'react'
import cnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { MarketContext } from 'containers/Market/MarketContextProvider'
import { parseFloatToCurrency } from 'helpers/parse'
import TicketDetailItem from '../../TicketItem/TicketItem'
import './SeeDetails.scss'

const SeeDetails = () => {
  const { products } = useContext(MarketContext)
  const [isSeeDetailsActive, setIsSeeDetailsActive] = useState(true)

  const seeDetailsButtonIcon = isSeeDetailsActive ? faChevronUp : faChevronDown
  const classes = {
    icon: cnames('ml-auto', { 'mb-1': isSeeDetailsActive, 'mt-1': !isSeeDetailsActive }),
    wrapped: cnames('see-details__wrapped pt-2 px-2',
      { 'see-details__wrapped--hide': isSeeDetailsActive }, { 'mb-4': !isSeeDetailsActive }),
  }

  const onClickSeeDetails = (e) => {
    e.preventDefault()
    setIsSeeDetailsActive(!isSeeDetailsActive)
  }

  return (
    <>
      <div className="see-details px-3 py-1 position-relative">
        <a
          className="see-details__text d-flex align-items-center w-100"
          href="#see-deatails"
          onClick={onClickSeeDetails}
        >
          Ver Detalles

          <FontAwesomeIcon className={classes.icon} icon={seeDetailsButtonIcon} size="lg" />
        </a>
      </div>

      <div className={classes.wrapped}>
        <div className="d-size overflow-auto">
          {products.map((({ amount, name, id, total }) => (
            <TicketDetailItem
              key={id}
              containerClass="mb-0"
              itemName={name}
              amount={amount}
              value={`${parseFloatToCurrency(total)}`}
              valueClass="font-weight-bold"
            />
          )))}
        </div>
      </div>
    </>
  )
}

export default SeeDetails
