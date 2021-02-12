import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import Button from 'shared/Button/Button'
import { useHistory } from 'react-router-dom'
import Modal from 'shared/formik/FormModal/FormModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import InventoryForm from '../Forms/InventoryForm'
import DeleteFormModal from './DeleteFormModal/DeleteFormModal'
import { validationSchema } from '../Forms/InventorySchema'
import './CategoryCard.scss'

const CategoryCard = ({ category, deleteCategory, updateCategory }) => {
  const history = useHistory()
  const { id, name } = category

  const [modalDelete, setModalDelete] = useState(false)
  const toggleModalDelete = () => setModalDelete(!modalDelete)

  const [modalEdit, setModalEditar] = useState(false)
  const toggleModalEd = () => setModalEditar(!modalEdit)

  const removeCategory = () => setModalDelete(true)

  const goToProducts = () => {
    history.push(`inventario/${id}`)
  }

  return (
    <Col xs="12" sm="12" md="6" lg="4" className="category-card mb-2 py-0 py-md-1 py-lg-0">
      <Card className="card-shadow text-center w-100 h-100">
        <CardBody className="p-0 flex-column d-inline-flex p-3">
          <div className="h-100 d-flex align-items-center mb-2">
            <h4 className="mb-1 text-truncate">{name}</h4>
          </div>

          <div className="d-flex justify-content-end align-items-center">
            <Button className="rounded" color="green-outline" onClick={goToProducts}>
              <FontAwesomeIcon size="sm" icon={faEye} />
            </Button>

            <Button className="mx-2 rounded" color="blue-outline" onClick={toggleModalEd}>
              <FontAwesomeIcon size="sm" icon={faPen} />
            </Button>

            <Button className="rounded" color="red-outline" onClick={removeCategory}>
              <FontAwesomeIcon size="sm" icon={faTrash} />
            </Button>
          </div>
        </CardBody>
      </Card>

      <DeleteFormModal
        onCompleteForm={deleteCategory}
        modal={modalDelete}
        name={name}
        toggle={toggleModalDelete}
        item={category}
      />

      <Modal
        colorButton="blue"
        onCompleteForm={updateCategory}
        initialValues={{ name, id }}
        modal={modalEdit}
        submitText="Actualizar"
        title="Editar"
        toggle={toggleModalEd}
        validationSchema={validationSchema}
      >
        {() => <InventoryForm />}
      </Modal>

    </Col>
  )
}

export default CategoryCard
