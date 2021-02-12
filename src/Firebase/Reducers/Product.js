import Firebase from 'Firebase/firebaseSingleton'

const productReducer = (action) => {
  const handler = productHandlers[action.type]
  if (handler) return handler(action)

  return Error("this action doesn't exist")
}

const ADD_PRODUCT = ({ payload, path }) => Firebase.addFirebaseRT(path, payload)

const SET_PROFFITS_VALUES = ({ payload, path }) => Firebase.addFirebaseRT(path, payload)

const REMOVE_PRODUCT = ({ payload, path }) => Firebase.removeFirebaseRT(path, payload)

const UPDATE_PRODUCT = ({ payload, path }) => {
  const { costXProduct, existence, id, listPrice, name, providerName, providerPiecePrice, unitPrice,
    wholesalePieces, wholesalePrice } = payload

  const data = {
    costXProduct,
    existence,
    listPrice,
    name,
    providerName,
    providerPiecePrice,
    unitPrice,
    wholesalePieces,
    wholesalePrice,
  }

  const item = { key: id, data }
  return Firebase.updateFirebaseRT(path, item)
}

const productHandlers = {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_PROFFITS_VALUES,
  UPDATE_PRODUCT,
}

export default productReducer
