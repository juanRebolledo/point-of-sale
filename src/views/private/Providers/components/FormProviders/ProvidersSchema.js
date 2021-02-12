import * as Yup from 'yup'

const initialValues = {
  name: '',
  rfc: '',
  address: '',
  phone: '',
  email: '' }

const ProvidersValidation = Yup.object({
  name: Yup.string()
    .required(),

  rfc: Yup.string()
    .required(),

  address: Yup.string()
    .max(100)
    .required(),

  email: Yup.string()
    .email()
    .required(),

  phone: Yup.string()
    .min(10)
    .max(20)
    .required(),
})

export { initialValues, ProvidersValidation }
