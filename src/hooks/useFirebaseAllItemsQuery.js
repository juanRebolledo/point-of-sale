import { useContext, useEffect, useState } from 'react'
import { UserContext } from 'containers/User/UserContext'
import { MarketContext } from 'containers/Market/MarketContextProvider'
import firebase from 'Firebase/firebaseSingleton'
import { orderByName } from 'helpers/sort'

const useFirebaseAllItemsQuery = ({ itemKey, orderBy, uri }) => {
  const { defaultStore, setErrorFirebase } = useContext(UserContext)
  const { products } = useContext(MarketContext)

  const [values, setValues] = useState({
    data: [],
    errors: null,
    loading: true,
  })

  const path = `/${defaultStore}/${uri}`

  const handlerItemKey = (category, item) => {
    if (!item) return []

    const keys = Object.keys(item)
    const pathProduct = `/${defaultStore}/inventory/${category}/products`

    const products = keys.map((key) => ({ id: key, pathProduct, ...item[key] })).sort(orderByName)
    return products
  }

  useEffect(() => {
    if (products.length === 0) {
      const ref = firebase.db.ref(path)
      ref.orderByChild(orderBy).once('value', (snapshot) => {
        const keys = Object.keys(snapshot.val() || {})
        const data = keys.map((key) => ({
          id: key,
          name: snapshot.val()[key].name,
          products: handlerItemKey(key, snapshot.val()[key][itemKey]),
        }))

        const dataOrdered = data.sort(orderByName)

        setValues((prevState) => ({
          ...prevState,
          data: dataOrdered,
          loading: false,
        }))
      }, (errorObject) => {
        setErrorFirebase(true)
      })
    }
    // eslint-disable-next-line
  }, [products])

  return { ...values, path }
}

export default useFirebaseAllItemsQuery
