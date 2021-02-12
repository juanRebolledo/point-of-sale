import * as Yup from 'yup'

const initialValues = { id: '', location: '', name: '' }

const validationSchema = Yup.object({
  id: Yup.string()
    .required(),

  location: Yup.string()
    .required(),

  name: Yup.string()
    .required(),
})

export { initialValues, validationSchema }
