import React from 'react'
import { Field } from 'formik'
import { FormGroup, Input } from 'reactstrap'
import { useFirebaseQuery } from 'hooks'

const SelectProviders = ({ isEdit }) => {
  const { data } = useFirebaseQuery({ orderBy: 'name', uri: 'providers' })
  const label = 'Nombre de Proveedor'
  const name = 'providerName'

  return (
    <FormGroup>
      <Field name={name}>
        {({ field, meta }) => (
          <>
            <label htmlFor={name}>{label}</label>
            <Input
              {...field}
              className="w-100"
              invalid={meta.touched && meta.error && true}
              valid={meta.touched && !meta.error && true}
              type="select"
            >
              {!isEdit && <option value="">-- Selecciona un proveedor ---</option>}
              {data.map(({ name }) => <option key={name}>{name}</option>)}
            </Input>
          </>
        )}
      </Field>
    </FormGroup>
  )
}

export default SelectProviders
