import React from 'react'
import { Field } from 'formik'
import { FormGroup, Input } from 'reactstrap'

const FormField = ({ component, disabled, label, name, placeholder, rows }) => (
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
            disabled={disabled}
            placeholder={placeholder}
            rows={rows}
            type={component}
          />
        </>
      )}
    </Field>
  </FormGroup>
)
export default FormField
