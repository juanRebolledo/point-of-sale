import { providerReducer } from 'Firebase/Reducers'

const addProvider = ({ data, path }) => providerReducer({
  type: 'ADD_PROVIDER', payload: data, path,
})

const removeProvider = ({ data, path }) => providerReducer({
  type: 'REMOVE_PROVIDER', payload: data, path,
})

const updateProvider = ({ data, path }) => providerReducer({
  type: 'UPDATE_PROVIDER', payload: data, path,
})

export { addProvider, removeProvider, updateProvider }
