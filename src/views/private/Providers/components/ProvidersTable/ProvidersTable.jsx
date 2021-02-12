import React from 'react'
import WrappedTable from 'shared/WrappedTable/WrappedTable'
import FormProviders from '../FormProviders/FormProviders'
import ProviderHeaders from './ProvidersHeader'
import { initialValues, ProvidersValidation } from '../FormProviders/ProvidersSchema'

const ProvidersTable = ({ onCompleteForm, providers, handleRemoveProvider, handleUpdateProvider, loading }) => (
  <WrappedTable
    colorSubmitModal="green"
    data={providers}
    formik={{ initialValues, onCompleteForm, validationSchema: ProvidersValidation }}
    headers={ProviderHeaders({ handleRemoveProvider, handleUpdateProvider })}
    loading={loading}
    placeholder="Buscar por nombre"
    searchBy="name"
    submitTextModal="Crear"
    textAddButton="Provedor"
  >
    {() => <FormProviders />}
  </WrappedTable>
)

export default ProvidersTable
