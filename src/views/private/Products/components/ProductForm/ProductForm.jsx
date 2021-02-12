import { parseValueWithDecimals } from 'helpers/parse'
import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import FormField from 'shared/formik/FormField/FormField'
import SelectProviders from '../SelectProviders/SelectProviders'

const ProductForm = ({ isEdit, setFieldValue, values }) => {
  useEffect(() => {
    if (values) {
      const value = Number(values.unitPrice)
      const iva = value * 0.16

      const newValue = parseValueWithDecimals(value + iva)
      setFieldValue('costXProduct', newValue.toString())
    }
    // eslint-disable-next-line
  }, [values.unitPrice])

  return (
    <>
      <Row>
        <Col md={6}>
          <FormField name="name" label="Nombre" />
        </Col>
        <Col md={6}>
          <FormField name="existence" label="Existencia" component="number" />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormField name="unitPrice" label="Precio Unitario" component="number" />
        </Col>
        <Col md={6}>
          <FormField disabled name="costXProduct" label="Costo x Producto" component="number" />
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormField name="listPrice" label="Precio de Lista" component="number" />
        </Col>
        <Col>
          <FormField name="wholesalePrice" label="Precio de Mayoreo" component="number" />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormField name="wholesalePieces" label="Piezas al Mayoreo" component="number" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <SelectProviders isEdit={isEdit} />
        </Col>
        <Col md={6}>
          <FormField name="providerPiecePrice" label="Precio del proveedor por pieza" component="number" />
        </Col>
      </Row>
    </>
  )
}
export default ProductForm
