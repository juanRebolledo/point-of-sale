import { inventoryReducer } from 'Firebase/Reducers'

const addCategory = ({ data, path }) => inventoryReducer({
  type: 'ADD_CATEGORY', payload: data, path,
})

const removeCategory = ({ data, path }) => inventoryReducer({
  type: 'REMOVE_CATEGORY', payload: data, path,
})

const updateCategory = ({ data, path }) => inventoryReducer({
  type: 'UPDATE_CATEGORY', payload: data, path,
})

export { addCategory, removeCategory, updateCategory }
