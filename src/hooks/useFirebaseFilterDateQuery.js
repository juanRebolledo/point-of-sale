import { useContext, useEffect, useState } from 'react'
import { UserContext } from 'containers/User/UserContext'
import firebase from 'Firebase/firebaseSingleton'
import { dateFormatted } from 'helpers/Date'

const useFirebaseFilterDateQuery = ({ start, orderBy, uri }) => {
  const { defaultStore, setErrorFirebase } = useContext(UserContext)
  const [values, setValues] = useState({
    data: [],
    errors: null,
    loading: true,
  })

  const path = `/${defaultStore}/${uri}`

  useEffect(() => {
    const ref = firebase.db.ref(path)
    const date = new Date()
    const end = dateFormatted(date, false)

    const listener = ref.orderByChild(orderBy).startAt(start).endAt(end).on('value', (snapshot) => {
      const items = []

      snapshot.forEach((data) => {
        items.push({ id: data.key, ...data.val() })
      })

      setValues((prevState) => ({
        ...prevState,
        data: items,
        loading: false,
      }))
    }, (errorObject) => {
      setErrorFirebase(true)
    })

    return () => ref.off('value', listener)
    // eslint-disable-next-line
  }, [start])

  return { ...values, path }
}

export default useFirebaseFilterDateQuery
