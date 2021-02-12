import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { MarketContext } from 'containers/Market/MarketContextProvider'
import './MovilTicketBar.scss'
import { parseFloatToCurrency } from 'helpers/parse'

const MovilTicketBar = ({ toggle, isOpen }) => {
  const { results: { total } } = useContext(MarketContext)
  const showIsOpenMessage = isOpen ? 'Ocultar orden de compra' : 'Mostrar orden de compra'
  const showIsOpenIcon = isOpen ? faEyeSlash : faEye

  return (
    <div className="movil-ticket">
      <div className="fixed-bottom button-container w-100 d-lg-none d-block">
        <div className="d-flex m-2">
          <div className="d-flex align-items-center px-3">
            <h4 className="font-weight-bold pr-2 m-0">Total:</h4>
            <small className="total">
              {`${parseFloatToCurrency(total)}`}
            </small>
          </div>
          <Button className="d-lg-flex ml-auto button-open mr-3" color="primary" onClick={toggle}>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon className="m-1 d-lg-none d-block" icon={showIsOpenIcon} />
              <small className="d-lg-flex ml-auto mr-auto">{showIsOpenMessage}</small>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MovilTicketBar
