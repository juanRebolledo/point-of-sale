import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import FormField from 'shared/formik/FormField/FormField'
import Firebase from 'Firebase/firebaseSingleton'
import { initialValues, LoginValidation } from './LoginSchema'

const LoginForm = () => {
  const [message, setMessage] = useState()

  const onCompleteForm = ({ email, password }) => {
    Firebase.login(email, password).catch((error) => {
      setMessage(error.message)
    })
  }

  return (
    <Formik validationSchema={LoginValidation} initialValues={initialValues} onSubmit={onCompleteForm}>
      <div className="col-md-4 mx-auto">
        <Form>
          <div className="card card-body h-100 justify-content-div">
            <FormField name="email" label="Correo Electronico" />

            <FormField name="password" component="password" label="Contaseña" />

            {message && <div className="text-danger py-3">{message}</div>}

            <button type="submit" className="btn button button-green mt-3">Ingresar</button>
          </div>
        </Form>
      </div>
    </Formik>
  )
}

export default LoginForm
