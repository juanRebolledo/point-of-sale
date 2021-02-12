import React, { useContext } from 'react'
import Layout from 'layout/Layout'
import { UserContext } from 'containers/User/UserContext'
import { addProvider, updateProvider, removeProvider } from 'Firebase/Actions'
import { useFirebaseQuery } from 'hooks'
import ProvidersTable from './components/ProvidersTable/ProvidersTable'

const Providers = () => {
  const { data, loading, path } = useFirebaseQuery({ orderBy: 'name', uri: 'providers/' })
  const { setErrorFirebase } = useContext(UserContext)

  const handleAddProvider = (provider) => {
    addProvider({ data: provider, path }).catch(() => setErrorFirebase(true))
  }

  const handleRemoveProvider = (provider) => {
    removeProvider({ data: provider.id, path }).catch(() => setErrorFirebase(true))
  }

  const handleUpdateProvider = (provider) => {
    updateProvider({ data: provider, path }).catch(() => setErrorFirebase(true))
  }

  return (
    <Layout>
      <div className="mt-4">
        <h2>Proveedores</h2>
        <div className="pt-2">
          {data && (
            <ProvidersTable
              providers={data}
              onCompleteForm={handleAddProvider}
              handleRemoveProvider={handleRemoveProvider}
              handleUpdateProvider={handleUpdateProvider}
              loading={loading}
            />
          )}
        </div>
      </div>
    </Layout>

  )
}

export default Providers
