import React from 'react'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { Button } from 'shared'

const DeleteFormModal = ({ modal, name, toggle, item, onCompleteForm }) => (
  <Modal isOpen={modal}>
    <ModalHeader toggle={toggle}>Eliminar</ModalHeader>
    <ModalBody className="pb-0">
      <div className="pb-3">
        ¿Esta seguro de
        {' '}
        <strong>eliminar</strong>
        {' '}
        la categoria
        {' '}
        <strong>{name}</strong>
        ?
      </div>
    </ModalBody>
    <ModalFooter>
      <Button color="red-outline" onClick={toggle}>
        Cancelar
      </Button>
      <Button color="red" onClick={() => { onCompleteForm(item) }}>
        Eliminar
      </Button>
    </ModalFooter>
  </Modal>
)

export default DeleteFormModal
