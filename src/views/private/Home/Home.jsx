import React, { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { useFirebaseQuery } from 'hooks'
import { UserContext } from 'containers/User/UserContext'
import { removeStore, updateStore } from 'Firebase/Actions'
import Layout from 'layout/Layout'
import Spinner from 'shared/Spinner/Spinner'
import NoItemsCreated from 'shared/NoItemsCreated/NoItemsCreated'
import AddStoreCard from './components/AddStoreCard'
import StoreCard from './components/StoreCard/StoreCard'

const Home = () => {
  const { data, loading, path } = useFirebaseQuery({ isUriPriority: true, orderBy: 'name', uri: '/' })
  const { setErrorFirebase } = useContext(UserContext)

  const handleAddStore = (store) => {
    updateStore({ data: store, path }).catch(() => setErrorFirebase(true))
  }

  const handleRemoveStore = (item) => {
    removeStore({ data: item.id, path }).catch(() => setErrorFirebase(true))
  }

  const handleUpdateStore = (value) => {
    updateStore({ data: value, path }).catch(() => setErrorFirebase(true))
  }

  return (
    <Layout>
      <Row className="align-items-center header-app justify-content-between">
        <Col lg={9}>
          <h2>SUCURSALES</h2>
        </Col>
        <Col lg={3}>
          <AddStoreCard addStore={handleAddStore} />
        </Col>
      </Row>

      <Row className={loading ? 'd-flex justify-content-center w-100' : ''}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {loading ? <Spinner /> : data.length > 0 ? data.filter((item) => item.id && item.name).map((store) => (
          <StoreCard
            key={store.id}
            store={store}
            deleteStore={handleRemoveStore}
            updateStore={handleUpdateStore}
          />
        )) : <NoItemsCreated text="Aún no hay sucursales creadas" />}
      </Row>
    </Layout>
  )
}

export default Home
