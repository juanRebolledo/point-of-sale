import React from 'react'
import FormField from 'shared/formik/FormField/FormField'
import { Row, Col } from 'reactstrap'

const FormProviders = () => (
  <Row>
    <Col xs="12" sm="12" md="6" lg="6">
      <FormField name="name" label="Nombre del Proveedor." />
    </Col>
    <Col xs="12" sm="12" md="6" lg="6">
      <FormField name="rfc" label="RFC." />
    </Col>
    <Col xs="12" sm="12" md="6" lg="6">
      <FormField name="email" label="Correo." />
    </Col>
    <Col xs="12" sm="12" md="6" lg="6">
      <FormField name="phone" label="Telefono." component="number" />
    </Col>
    <Col xs="12" sm="12" lg="12">
      <FormField name="address" label="Direccion." />
    </Col>
  </Row>
)

export default FormProviders
