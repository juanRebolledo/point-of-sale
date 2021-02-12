import React, { useContext } from 'react'
import Layout from 'layout/Layout'
import { Row, Col } from 'reactstrap'
import { UserContext } from 'containers/User/UserContext'
import { addCategory, removeCategory, updateCategory } from 'Firebase/Actions'
import { useFirebaseQuery } from 'hooks'
import Spinner from 'shared/Spinner/Spinner'
import NoItemsCreated from 'shared/NoItemsCreated/NoItemsCreated'
import CategoryCard from './components/CategoryCard/CategoryCard'
import AddCategoryCard from './components/AddCategoryCard/AddCategoryCard'
import './Inventories.css'

const Inventory = () => {
  const { data, loading, path } = useFirebaseQuery({ uri: 'inventory', orderBy: 'name' })
  const { setErrorFirebase } = useContext(UserContext)

  const handleAddCategory = (categorie) => {
    addCategory({ data: categorie, path }).catch(() => setErrorFirebase(true))
  }

  const handleRemoveCategory = (item) => {
    removeCategory({ data: item.id, path }).catch(() => setErrorFirebase(true))
  }

  const handleUpdateCategory = (value) => {
    updateCategory({ data: value, path }).catch(() => setErrorFirebase(true))
  }

  return (
    <Layout>
      <Row className="align-items-center header-app justify-content-between">
        <Col lg={9}>
          <h2>INVENTARIO</h2>
        </Col>
        <Col lg={3}>
          <AddCategoryCard addCategory={handleAddCategory} />
        </Col>
      </Row>

      <Row className={loading ? 'd-flex justify-content-center w-100' : ''}>
        {// eslint-disable-next-line no-nested-ternary
          loading ? <Spinner /> : data.length > 0 ? data.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              deleteCategory={handleRemoveCategory}
              updateCategory={handleUpdateCategory}
            />
          )) : <NoItemsCreated text="Aún no hay categorias disponibles, ¡Porfavor agrega una!" />
        }
      </Row>
    </Layout>
  )
}

export default Inventory
