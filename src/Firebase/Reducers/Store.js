import Firebase from 'Firebase/firebaseSingleton'

const storeReducer = (action) => {
  const handler = inventoryHandlers[action.type]
  if (handler) return handler(action)

  return Error("this action doesn't exist")
}

const ADD_STORE = ({ payload, path }) => Firebase.addFirebaseRT(path, payload)

const REMOVE_STORE = ({ payload, path }) => Firebase.removeFirebaseRT(path, payload)

const UPDATE_STORE = ({ payload, path }) => {
  const { id } = payload

  const item = { key: id, data: payload }
  return Firebase.updateFirebaseRT(path, item)
}

const inventoryHandlers = {
  ADD_STORE,
  REMOVE_STORE,
  UPDATE_STORE,
}

export default storeReducer
