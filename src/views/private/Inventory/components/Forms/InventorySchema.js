import * as Yup from 'yup'

const initialValues = { name: '' }

const validationSchema = Yup.object({
  name: Yup.string()
    .max(30)
    .required(),
})

export { initialValues, validationSchema }
