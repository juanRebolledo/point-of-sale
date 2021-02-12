import React, { createContext, useState, useLayoutEffect, useEffect } from 'react'
import Firebase from 'Firebase/firebaseSingleton'
import { getLocalStorage, setLocalStorage, removeItemLocalStorage, clearLocalStorage } from 'helpers/localStorage'
import Spinner from 'shared/Spinner/Spinner'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false)
  const [storeSelected, setStoreSelected] = useState({ id: '', name: '' })
  const [loading, setLoading] = useState(true)
  const [errorFirebase, setErrorFirebase] = useState(false)
  const keyLocalStorage = 'store'

  useLayoutEffect(() => {
    authListener()
    const store = getLocalStorage(keyLocalStorage)

    if (store) setStoreSelected(store)
  }, [])

  useEffect(() => {
    setLocalStorage(keyLocalStorage, storeSelected)
  }, [storeSelected])

  const authListener = async () => {
    await Firebase.getCurrentUser((user) => {
      if (user) setAuth(true)
      if (!user) clearLocalStorage()

      setLoading(false)
    })
  }

  const onLogout = () => {
    removeItemLocalStorage(keyLocalStorage)
    Firebase.logout()
    setAuth(false)
  }

  if (loading) return <Spinner />

  const defaultStore = storeSelected.id
  const storeName = storeSelected.name

  const value = {
    auth,
    errorFirebase,
    defaultStore,
    storeName,
    setAuth,
    setErrorFirebase,
    setStoreSelected,
    onLogout,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
