import React from 'react'
import { Row, Col } from 'reactstrap'
import FormField from 'shared/formik/FormField/FormField'

const InventoryForm = () => {
  return (
    <Row>
      <Col sm="12">
        <FormField name="name" label="Ingrese el nombre de la categoria." />
      </Col>
    </Row>
  )
}
export default InventoryForm
