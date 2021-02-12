import React, { useContext, useState, useEffect } from 'react'
import { Card, CardBody, Col, CustomInput, FormGroup } from 'reactstrap'
import cnames from 'classnames'
import { UserContext } from 'containers/User/UserContext'
import Button from 'shared/Button/Button'
import Modal from 'shared/formik/FormModal/FormModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import StoreForm from '../Storeform'
import { validationSchema } from '../StoreSchema'
import DeleteFormModal from '../DeleteStoreModal'
import './StoreCard.scss'

const StoreCard = ({ store, deleteStore, updateStore }) => {
  const { defaultStore, setStoreSelected } = useContext(UserContext)
  const [checkbox, setCheckbox] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [modalEdit, setModalEditar] = useState(false)

  const { id, location, name } = store
  const classes = cnames('category-card mb-2 py-0 py-md-1 py-lg-0', { 'category-card--active': checkbox })

  const onChangeCheckbox = (event) => {
    const checkeboxValue = event.target.checked
    const storeValues = checkeboxValue ? { name, id } : { name: '', id: '' }

    setStoreSelected(storeValues)
    setCheckbox(checkeboxValue)
  }

  const toggleModalDelete = () => setModalDelete(!modalDelete)

  const toggleModalEd = () => setModalEditar(!modalEdit)

  const removeCategory = () => setModalDelete(true)

  const onRemoveStore = (item) => {
    if (checkbox) setStoreSelected({ id: '', name: '' })
    deleteStore(item)
  }

  useEffect(() => {
    setCheckbox(defaultStore === id)
    // eslint-disable-next-line
  }, [defaultStore])

  return (
    <Col xs="12" sm="12" md="6" lg="4" className={classes}>
      <Card className="card-shadow text-center w-100 h-100">
        <CardBody className="p-0 flex-column d-inline-flex p-3">
          <div className="h-100 d-flex align-items-center mb-2">
            <h4 className="mb-1 text-truncate">{name}</h4>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="location-label text-truncate">
              {location}
            </div>

            <div className="d-flex align-items-center">
              <FormGroup check>
                <CustomInput
                  className="select-checkbox"
                  id={id}
                  checked={checkbox}
                  onChange={onChangeCheckbox}
                  type="checkbox"
                />
              </FormGroup>

              <Button className="mx-2 rounded" color="blue-outline" onClick={toggleModalEd}>
                <FontAwesomeIcon size="sm" icon={faPen} />
              </Button>

              <Button className="rounded" color="red-outline" onClick={removeCategory}>
                <FontAwesomeIcon size="sm" icon={faTrash} />
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      <DeleteFormModal
        onCompleteForm={onRemoveStore}
        modal={modalDelete}
        name={name}
        toggle={toggleModalDelete}
        item={store}
      />

      <Modal
        colorButton="blue"
        onCompleteForm={updateStore}
        initialValues={store}
        modal={modalEdit}
        submitText="Actualizar"
        title="Editar"
        toggle={toggleModalEd}
        validationSchema={validationSchema}
      >
        {(props) => <StoreForm {...props} nameDisabled />}
      </Modal>

    </Col>
  )
}

export default StoreCard
