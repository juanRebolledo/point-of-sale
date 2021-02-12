import React, { useContext, useEffect, useState } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { updateItemCart } from 'containers/Market/Actions/Market'
import { MarketContext } from 'containers/Market/MarketContextProvider'
import { parseFloatToCurrency } from 'helpers/parse'
import ScaleInput from 'shared/ScaleInput/ScaleInput'
import Notification from 'shared/Notification/Notification'
import './Product.scss'

const Product = ({ product, handlerRemoveProduct }) => {
  const { dispatch } = useContext(MarketContext)
  const { amount, existence, id, name, productValue, wholesalePieces } = product

  const [discountValue, setDiscountValue] = useState(0)
  const [isChecked, setIsChecked] = useState({ discount: false, wholesale: false, error: false })

  const handlerHideNotify = (bool) => setIsChecked((prevState) => ({ ...prevState, error: bool }))

  const handlerUpdateProduct = (data) => {
    const productUpdated = { ...product, ...data }
    dispatch(updateItemCart(id, productUpdated))
  }

  const handlerAmmount = (amount) => {
    setIsChecked((prevState) => ({ ...prevState, wholesale: !(wholesalePieces > amount) }))
    handlerUpdateProduct({ amount })
  }

  const onRemoveProduct = (e) => {
    e.preventDefault()
    handlerRemoveProduct(id)
  }

  const handlerChecked = ({ target }) => {
    const { checked, name } = target
    if (name === 'wholesale' && wholesalePieces > existence) {
      handlerHideNotify(true)
      return
    }

    setIsChecked((prevState) => ({ ...prevState, [name]: checked }))
  }

  const handlerDiscountValue = ({ target }) => {
    const { value } = target
    const isNumber = /^\d+$/

    if (!value.length) setDiscountValue('')
    if (value.length > 2 || !isNumber.test(value)) return

    setDiscountValue(value)
  }

  const handlerWholesaleChecked = ({ target }) => {
    const { checked } = target
    const isWholesaleAvailable = wholesalePieces <= existence

    if (!checked) handlerAmmount(1)
    else if (checked && isWholesaleAvailable) handlerAmmount(wholesalePieces)
  }

  useEffect(() => {
    if (!isChecked.discount) setDiscountValue(0)
  }, [isChecked.discount])

  useEffect(() => {
    handlerUpdateProduct({ discount: discountValue })
    // eslint-disable-next-line
  }, [discountValue])

  return (
    <div className="product w-100 mb-2">
      <div className="d-flex flex-grow-1 flex-sm-row align-items-center">
        <span className="product__text text-truncate font-weight-bold">
          {name}
        </span>

        <div className="ml-auto">
          <a href="remove-product ml-auto" onClick={onRemoveProduct} type="button">
            <FontAwesomeIcon color="#8C8C8C" icon={faTimes} size="lg" />
          </a>
        </div>
      </div>

      <div className="d-flex align-items-center product-actions">
        <div className="mr-2 wrap-scale">
          <ScaleInput
            getInnerValue={handlerAmmount}
            key={`selected-${id}`}
            limitValue={existence}
            value={amount}
          />
        </div>

        <FormGroup check className="mr-2">
          <Label check>
            <Input checked={isChecked.wholesale} onClick={handlerWholesaleChecked} name="wholesale" onChange={handlerChecked} type="checkbox" />{' '}
            Mayoreo
          </Label>
        </FormGroup>

        <FormGroup check className="mr-2">
          <Label check>
            <Input checked={isChecked.discount} name="discount" onChange={handlerChecked} type="checkbox" />{' '}
            % extra
          </Label>
        </FormGroup>

        { isChecked.discount && <Input className="mr-2 product__custom-input" onChange={handlerDiscountValue} type="text" value={discountValue} />}

        <span className="product__price font-weight-bold ml-auto">
          {`${parseFloatToCurrency(productValue)}`}
        </span>
      </div>
      {isChecked.error && <Notification delay={3000} hideNotify={handlerHideNotify} text="Las piezas por mayoreo superan la existencia" />}
    </div>
  )
}

export default Product
