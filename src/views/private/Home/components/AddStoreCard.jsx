import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from 'shared/formik/FormModal/FormModal'
import { Button } from 'shared'
import StoreForm from './Storeform'
import { initialValues, validationSchema } from './StoreSchema'

const AddCategoryCard = ({ addStore }) => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)

  return (
    <>
      <Button className="ml-auto w-100" color="green" onClick={toggleModal} type="button">
        Agregar Sucursal
        <FontAwesomeIcon className="ml-2" icon={faPlus} />
      </Button>

      <Modal
        colorButton="green"
        onCompleteForm={addStore}
        initialValues={initialValues}
        modal={modal}
        submitText="Crear"
        toggle={toggleModal}
        title="Añadir Sucursal"
        validationSchema={validationSchema}
      >
        {(props) => <StoreForm {...props} />}
      </Modal>
    </ >
  )
}

export default AddCategoryCard
