import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import FormField from 'shared/formik/FormField/FormField'

const StoreForm = ({ nameDisabled, values, setFieldValue }) => {
  useEffect(() => {
    const id = values.name.toLocaleLowerCase().split(' ').join('-')

    setFieldValue('id', id)
    // eslint-disable-next-line
  }, [values.name])

  return (
    <Row>
      <Col lg={6}>
        <FormField disabled={nameDisabled} name="name" label="Ingrese el nombre de la sucursal." />
      </Col>

      <Col lg={6}>
        <FormField name="location" label="Ingrese la ubicacion de la sucursal." />
      </Col>
    </Row>
  )
}

StoreForm.defaultProps = {
  nameDisabled: false,
}

export default StoreForm
