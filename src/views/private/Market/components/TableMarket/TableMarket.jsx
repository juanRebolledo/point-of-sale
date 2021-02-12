import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react'
import { useFirebaseAllItemsQuery } from 'hooks'
import AddToCart from './AddToCart'
import SelectCategory from './SelectCategory'

const TableMarket = forwardRef((props, ref) => {
  const { data, loading } = useFirebaseAllItemsQuery({ uri: 'inventory', orderBy: 'name', itemKey: 'products' })
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  const handleSelectCategory = (index) => {
    setProducts(data[index]?.products || [])
  }

  useImperativeHandle(ref, () => ({
    handlerDeselectProduct(id) {
      categories.forEach((item) => {
        if (!item.products) return
        item.products.forEach((product) => {
          if (product.id === id) product.selected = false
        })
      })
    },
  }))

  useEffect(() => {
    if (data) {
      setCategories(data)
      handleSelectCategory(0)
    }
    // eslint-disable-next-line
  }, [data])

  return (
    <div className="d-flex flex-column">
      {categories.length > 0 && <SelectCategory data={categories} onChange={handleSelectCategory} />}
      <AddToCart loading={loading} products={products} />
    </div>
  )
})

export default TableMarket
