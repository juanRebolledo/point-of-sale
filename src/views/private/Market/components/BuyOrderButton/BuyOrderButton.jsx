import React, { useContext, useEffect, useState } from 'react'
import { MarketContext } from 'containers/Market/MarketContextProvider'
import { UserContext } from 'containers/User/UserContext'
import { purchaseOrder } from 'containers/Market/Actions/Market'
import Button from 'shared/Button/Button'
import SimpleModal from 'shared/Modal/SimpleModal'

const BuyOrderButton = () => {
  const { defaultStore } = useContext(UserContext)
  const { products, dispatch } = useContext(MarketContext)
  const [isAvailable, setIsAvailable] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handlerPurchase = () => dispatch(purchaseOrder(`${defaultStore}/proffits`))

  const toggleModal = () => setModalIsOpen(!modalIsOpen)

  const isValidToBuy = (product) => product.amount > 0

  useEffect(() => {
    const productsIsAvailable = !(products.every(isValidToBuy) && products.length > 0)
    setIsAvailable(productsIsAvailable)
  }, [products])

  return (
    <>
      <Button className="font-weight-bold w-100" color="blue" disabled={isAvailable} onClick={toggleModal}>
        Registrar Venta
      </Button>
      <SimpleModal
        colorButton="blue"
        disableRenderProps
        modal={modalIsOpen}
        onCompleteForm={handlerPurchase}
        submitText="Comprar"
        title="Comprar"
        toggle={toggleModal}
      >
        <p>¿Deseas realizar la compra?</p>
      </SimpleModal>
    </>
  )
}

export default BuyOrderButton
