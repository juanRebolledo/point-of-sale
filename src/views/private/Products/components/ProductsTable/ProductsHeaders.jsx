import React from 'react'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import ProductForm from '../ProductForm/ProductForm'
import { ProductValidation } from '../ProductForm/ProductFormSchema'

const ProductHeaders = (handleRemoveProduct, handleUpdateProduct) => [
  { key: 'name', name: 'Nombre' },
  { key: 'existence', name: 'Existencia' },
  { key: 'unitPrice', name: 'Precio Unitario' },
  { key: 'costXProduct', name: 'Costo x Producto' },
  { key: 'listPrice', name: 'Precio de Lista' },
  { key: 'wholesalePrice', name: 'Precio de Mayoreo' },
  { key: 'wholesalePieces', name: 'Piezas al Mayoreo' },
  { key: 'providerPiecePrice', name: 'Precio del proveedor por pieza' },
  { key: 'providerName', name: 'Nombre de proveedor' },
  {
    key: 'actions',
    name: '',
    actions: [
      {
        color: '#216BFE',
        colorButton: 'blue',
        hoverName: 'Editar',
        component: (item) => (<ProductForm {...item} isEdit />),
        icon: faPen,
        onCompleteForm: (item) => handleUpdateProduct(item),
        submitText: 'Actualizar',
        validationSchema: ProductValidation,
      },
      {
        color: '#FF5771',
        colorButton: 'red',
        hoverName: 'Eliminar',
        component: ({ values }) => (
          <p>
            ¿Esta seguro de <strong>eliminar</strong>el producto <strong>{values.name}</strong> ?
          </p>
        ),
        icon: faTrash,
        onCompleteForm: (item) => handleRemoveProduct(item),
      },
    ],
  },
]

export default ProductHeaders
