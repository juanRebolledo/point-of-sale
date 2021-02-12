import React from 'react'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import FormProviders from '../FormProviders/FormProviders'
import { ProvidersValidation } from '../FormProviders/ProvidersSchema'

const ProviderHeaders = ({ handleRemoveProvider, handleUpdateProvider }) => [
  { key: 'name', name: 'Nombre' },
  { key: 'rfc', name: 'RFC' },
  { key: 'email', name: 'Correo' },
  { key: 'phone', name: 'Telefono' },
  { key: 'address', name: 'Direccion' },
  {
    key: 'actions',
    name: '',
    actions: [
      {
        color: '#216BFE',
        colorButton: 'blue',
        hoverName: 'Editar',
        component: () => (<FormProviders />),
        icon: faPen,
        onCompleteForm: (item) => handleUpdateProvider(item),
        validationSchema: ProvidersValidation,
        submitText: 'Actualizar',
      },
      {
        color: '#FF5771',
        colorButton: 'red',
        hoverName: 'Eliminar',
        component: ({ values }) => (
          <p>
            ¿Esta seguro de
            {' '}
            <strong>eliminar</strong>
            {' '}
            el provedor
            {' '}
            <strong>
              {' '}
              {values.name}
            </strong>
            ?
          </p>
        ),
        icon: faTrash,
        onCompleteForm: (item) => handleRemoveProvider(item),
      },
    ],
  },
]

export default ProviderHeaders
