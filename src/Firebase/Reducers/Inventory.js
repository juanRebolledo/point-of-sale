import Firebase from 'Firebase/firebaseSingleton'

const inventoryReducer = (action) => {
  const handler = inventoryHandlers[action.type]
  if (handler) return handler(action)

  return Error("this action doesn't exist")
}

const ADD_CATEGORY = ({ payload, path }) => Firebase.addFirebaseRT(path, payload)

const REMOVE_CATEGORY = ({ payload, path }) => Firebase.removeFirebaseRT(path, payload)

const UPDATE_CATEGORY = ({ payload, path }) => {
  const { id, name } = payload
  const updateData = { name }

  const item = { key: id, data: updateData }
  return Firebase.updateFirebaseRT(path, item)
}

const inventoryHandlers = {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
}

export default inventoryReducer
