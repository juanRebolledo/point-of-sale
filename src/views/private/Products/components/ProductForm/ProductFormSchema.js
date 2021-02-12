import * as Yup from 'yup'

const initialValues = {
  costXProduct: '',
  existence: '',
  listPrice: '',
  name: '',
  providerName: '',
  providerPiecePrice: '',
  unitPrice: '',
  wholesalePieces: '',
  wholesalePrice: '',
}

const ProductValidation = Yup.object({
  costXProduct: Yup.string().required(),
  existence: Yup.string().required(),
  listPrice: Yup.string().required(),
  name: Yup.string().max(35).required(),
  providerName: Yup.string().max(35).required(),
  providerPiecePrice: Yup.string().required(),
  unitPrice: Yup.string().required(),
  wholesalePieces: Yup.string().required(),
  wholesalePrice: Yup.string().required(),
})

export { initialValues, ProductValidation }
