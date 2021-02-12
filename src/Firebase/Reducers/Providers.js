import Firebase from 'Firebase/firebaseSingleton'

const providersReducer = (action) => {
  const handler = providersHandlers[action.type]
  if (handler) return handler(action)

  return Error("this action doesn't exist")
}

const ADD_PROVIDER = ({ payload, path }) => Firebase.addFirebaseRT(path, payload)

const REMOVE_PROVIDER = ({ payload, path }) => Firebase.removeFirebaseRT(path, payload)

const UPDATE_PROVIDER = ({ payload, path }) => {
  const { address, email, id, name, phone, rfc } = payload
  const newData = { address, email, name, phone, rfc }

  const item = { key: id, data: newData }
  return Firebase.updateFirebaseRT(path, item)
}

const providersHandlers = {
  ADD_PROVIDER,
  REMOVE_PROVIDER,
  UPDATE_PROVIDER,
}

export default providersReducer
