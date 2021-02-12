import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Button } from 'shared'

const SimpleModal = ({ children, colorButton, disableRenderProps, showBtnCancel, modal, onCompleteForm,
  submitText, title, toggle, ...props }) => {
  const onSubmit = (values) => {
    onCompleteForm && onCompleteForm(values)
    toggle()
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody className="pb-0">
        {disableRenderProps ? children : children(props)}
      </ModalBody>
      <ModalFooter>
        {
          showBtnCancel && (
            <Button color={`${colorButton}-outline`} onClick={toggle} type="button">
              Cancelar
            </Button>
          )
        }

        <Button color={colorButton} type="button" onClick={onSubmit}>
          {submitText}
        </Button>
      </ModalFooter>
    </Modal>
  )
}

SimpleModal.defaultProps = {
  showBtnCancel: true,
  submitText: 'Guardar',
}

export default SimpleModal
