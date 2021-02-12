/* eslint-disable import/extensions */
import React from 'react'
import WrappedTable from 'shared/WrappedTable/WrappedTable'
import FormProducts from '../ProductForm/ProductForm'
import { initialValues, ProductValidation } from '../ProductForm/ProductFormSchema'
import ProductHeaders from './ProductsHeaders'

const ProductsTable = ({ onCompleteForm, products, handleRemoveProduct, handleUpdateProduct, loading }) => {
  return (
    <WrappedTable
      colorSubmitModal="green"
      data={products}
      formik={{ initialValues, onCompleteForm, validationSchema: ProductValidation }}
      headers={ProductHeaders(handleRemoveProduct, handleUpdateProduct)}
      loading={loading}
      placeholder="Buscar por nombre"
      searchBy="name"
      submitTextModal="Crear"
      textAddButton="Producto"
    >
      {(props) => <FormProducts {...props} />}
    </WrappedTable>
  )
}

export default ProductsTable
