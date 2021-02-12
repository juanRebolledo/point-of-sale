const addToCart = (values) => ({
  type: 'ADD_TO_CART', payload: values,
})

const purchaseOrder = (path) => ({ type: 'PURCHASE_ORDER', path })

const removeToCart = (id) => ({
  type: 'REMOVE_TO_CART', payload: id,
})

const showResults = () => ({ type: 'SHOW_RESULTS' })

const updateItemCart = (id, product) => ({
  type: 'UPDATE_ITEM_CART', payload: { id, product },
})

export { addToCart, purchaseOrder, removeToCart, showResults, updateItemCart }
