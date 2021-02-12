import React, { useContext } from 'react'
import WrappedTable from 'shared/WrappedTable/WrappedTable'
import { MarketContext } from 'containers/Market/MarketContextProvider'
import { addToCart } from 'containers/Market/Actions/Market'
import { MarketHeaders } from './MarketHeaders'

function AddToCart({ products, loading }) {
  const { dispatch } = useContext(MarketContext)

  const handlerAddToCart = (product) => {
    if (parseInt(product.existence) > 0) return dispatch(addToCart(product))
  }

  return (
    <WrappedTable
      data={products}
      headers={MarketHeaders({ addToCart: handlerAddToCart })}
      loading={loading}
      searchBy="name"
      showModalTable={false}
    />
  )
}

export default AddToCart
