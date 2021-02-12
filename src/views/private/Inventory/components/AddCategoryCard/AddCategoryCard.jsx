import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from 'shared/formik/FormModal/FormModal'
import { Button } from 'shared'
import InventoryForm from '../Forms/InventoryForm'
import { initialValues, validationSchema } from '../Forms/InventorySchema'

const AddCategoryCard = ({ addCategory }) => {
  const [modal, setModal] = useState(false)
  const toggleModal = () => setModal(!modal)

  return (
    <>
      <Button className="ml-auto w-100" color="green" onClick={toggleModal} type="button">
        Agregar Categoria
        <FontAwesomeIcon className="ml-2" icon={faPlus} />
      </Button>

      <Modal
        colorButton="green"
        onCompleteForm={addCategory}
        initialValues={initialValues}
        modal={modal}
        submitText="Crear"
        toggle={toggleModal}
        title="Añadir Categoria"
        validationSchema={validationSchema}
      >
        {(item) => <InventoryForm values={item.values} />}
      </Modal>
    </ >
  )
}

export default AddCategoryCard
