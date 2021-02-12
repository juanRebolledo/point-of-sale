import React, { useContext } from 'react'
import { MarketContext } from 'containers/Market/MarketContextProvider'
import { removeToCart } from 'containers/Market/Actions/Market'
import Product from './Product/Product'
import Ticket from '../Ticket/Ticket'
import './SelectedProducts.scss'

const NotProducts = () => (
  <div className="d-flex align-items-center flex-column">
    <p className="text-center">No hay productos seleccionados</p>
  </div>
)

const SelectedProducts = ({ deselectRow }) => {
  const { products, dispatch } = useContext(MarketContext)

  const handlerRemoveProduct = (id) => {
    deselectRow(id)
    dispatch(removeToCart(id))
  }

  return (
    <div className="selected-products h-100 px-3 pt-3 position-relative d-flex flex-column">
      <h3 className="font-weight-bold mb-4 text-center">Productos Seleccionados</h3>
      {products.length > 0 ? (
        <div className="overflow-auto">
          {products.map((product) => <Product key={`p-${product.id}`} {...{ product, handlerRemoveProduct }} />)}
        </div>
      ) : (<NotProducts />)}

      <Ticket />
    </div>
  )
}

export default SelectedProducts
