import { productReducer } from 'Firebase/Reducers'

const addProduct = ({ data, path }) => productReducer({
  type: 'ADD_PRODUCT', payload: data, path,
})

const setProffitsValues = ({ data, path }) => productReducer({
  type: 'SET_PROFFITS_VALUES', payload: data, path,
})

const removeProduct = ({ data, path }) => productReducer({
  type: 'REMOVE_PRODUCT', payload: data, path,
})

const updateProduct = ({ data, path }) => productReducer({
  type: 'UPDATE_PRODUCT', payload: data, path,
})

export { addProduct, removeProduct, setProffitsValues, updateProduct }
