import React from 'react'
import { Formik, Form } from 'formik'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { Button } from 'shared'

const FormModal = ({ children, colorButton, disableRenderProps, initialValues, modal, onCompleteForm, submitText,
  title, toggle, validationSchema }) => {
  const onSubmit = (values) => {
    onCompleteForm(values)
    toggle()
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props) => (
          <Form>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody className="pb-0">
              {disableRenderProps ? children : children(props)}
            </ModalBody>
            <ModalFooter>
              <Button color={`${colorButton}-outline`} onClick={toggle} type="button">
                Cancelar
              </Button>

              <Button color={colorButton} type="submit">
                {submitText}
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}

FormModal.defaultProps = {
  submitText: 'Guardar',
}

export default FormModal
