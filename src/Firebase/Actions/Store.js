import { storeReducer } from 'Firebase/Reducers'

const addStore = ({ data, path }) => storeReducer({
  type: 'ADD_STORE', payload: data, path,
})

const removeStore = ({ data, path }) => storeReducer({
  type: 'REMOVE_STORE', payload: data, path,
})

const updateStore = ({ data, path }) => storeReducer({
  type: 'UPDATE_STORE', payload: data, path,
})

export { addStore, removeStore, updateStore }
