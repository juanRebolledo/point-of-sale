import { calculateSubtotalFromProduct, calculateResultsFromProducts } from 'helpers/CalculatorMarket'
import { setProffitsValues, updateProduct } from 'Firebase/Actions'
import { dateFormatted } from 'helpers/Date'

const marketReducer = (state, action) => {
  const handlerAction = marketHandlers[action.type]
  if (handlerAction) { return handlerAction(state, action) }
  return state
}

const ADD_TO_CART = (state, { payload }) => {
  const newProduct = calculateSubtotalFromProduct(payload)

  return {
    ...state,
    products: [...state.products, { amount: 1, ...newProduct }],
  }
}

const PURCHASE_ORDER = (state, { path }) => {
  const { products, results } = state
  let proffits = 0

  products.forEach((product) => {
    const { amount, costXProduct, existence, pathProduct } = product
    const newExistence = existence - amount
    const productUpdated = { ...product, existence: newExistence }
    proffits += (costXProduct * amount)

    updateProduct({ data: productUpdated, path: pathProduct })
  })

  const totalProffits = results.total - proffits
  const todayDate = new Date()
  const data = { date: dateFormatted({ date: todayDate }), proffit: totalProffits, total: results.total }

  setProffitsValues({ data, path })

  return {
    ...state,
    products: [],
  }
}

const REMOVE_TO_CART = (state, { payload }) => {
  const updatedProducts = state.products.filter((product) => product.id !== payload)

  return {
    ...state,
    products: updatedProducts,
  }
}

const SHOW_RESULTS = (state) => {
  const results = calculateResultsFromProducts(state.products)

  return {
    ...state,
    results,
  }
}

const UPDATE_ITEM_CART = (state, { payload }) => {
  const { id, product } = payload
  const indexElement = state.products.findIndex((product) => product.id === id)
  const newProduct = calculateSubtotalFromProduct(product)
  const products = [...state.products]
  products[indexElement] = { ...newProduct }

  return {
    ...state,
    products,
  }
}

const marketHandlers = {
  ADD_TO_CART,
  PURCHASE_ORDER,
  REMOVE_TO_CART,
  SHOW_RESULTS,
  UPDATE_ITEM_CART,
}

export default marketReducer
