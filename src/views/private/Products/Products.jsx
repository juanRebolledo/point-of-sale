import React, { useContext } from 'react'
import { addProduct, removeProduct, updateProduct } from 'Firebase/Actions'
import { useParams } from 'react-router-dom'
import { UserContext } from 'containers/User/UserContext'
import { useFirebaseQuery } from 'hooks'
import Layout from 'layout/Layout'
import ProductsTable from './components/ProductsTable/ProductsTable'

const Products = () => {
  const { id } = useParams()
  const { setErrorFirebase } = useContext(UserContext)
  const category = useFirebaseQuery({ uri: `inventory/${id}/name`, onlySnap: true, orderBy: 'name' })
  const { data, loading, path } = useFirebaseQuery({ uri: `inventory/${id}/products`, orderBy: 'name' })

  const handleAddProduct = (product) => {
    addProduct({ data: product, path: `${path}` }).catch(() => setErrorFirebase(true))
  }

  const handleRemoveProduct = (item) => {
    removeProduct({ data: item.id, path: `${path}` }).catch(() => setErrorFirebase(true))
  }

  const handleUpdateProduct = (value) => {
    updateProduct({ data: value, path: `${path}` }).catch(() => setErrorFirebase(true))
  }

  return (
    <Layout>
      <div className="mt-2">
        <h2>{category.loading ? '...' : category.data}</h2>
      </div>

      <div>
        <ProductsTable
          products={data}
          onCompleteForm={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleUpdateProduct={handleUpdateProduct}
          loading={loading}
        />
      </div>
    </Layout>
  )
}

export default Products
