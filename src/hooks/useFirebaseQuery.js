import { useContext, useEffect, useState } from 'react'
import { UserContext } from 'containers/User/UserContext'
import firebase from 'Firebase/firebaseSingleton'

const useFirebaseQuery = ({ isUriPriority, onlySnap, orderBy, uri }) => {
  const { defaultStore, setErrorFirebase } = useContext(UserContext)
  const [values, setValues] = useState({
    data: [],
    errors: null,
    loading: true,
  })

  const path = isUriPriority ? uri : `/${defaultStore}/${uri}`

  useEffect(() => {
    const ref = firebase.db.ref(path)
    const listener = ref.orderByChild(orderBy).on('value', (snapshot) => {
      if (!onlySnap) {
        const items = []

        snapshot.forEach((data) => {
          items.push({ id: data.key, ...data.val() })
        })

        setValues((prevState) => ({
          ...prevState,
          data: items,
          loading: false,
        }))
      } else {
        setValues((prevState) => ({
          ...prevState,
          data: snapshot.val(),
          loading: false,
        }))
      }
    }, (errorObject) => {
      setErrorFirebase(true)
    })

    return () => ref.off('value', listener)
    // eslint-disable-next-line
  }, [])

  return { ...values, path }
}

export default useFirebaseQuery
