import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const MarketHeaders = ({ addToCart }) => [
  {
    key: 'name',
    name: 'Nombre',
  },
  {
    key: 'existence',
    name: 'Existencia',
  },
  {
    key: 'listPrice',
    name: 'Precio',
  },
  {
    key: 'actions',
    name: 'Agregar al carrito',
    actions: [
      {
        icon: faCartPlus,
        color: 'blue',
        hoverName: 'Agregar',
        disable: {
          prop: 'existence',
          value: 0,
        },
        onCompleteForm: (product) => {
          if (product.existence === 0) { product.selected = false } else addToCart(product)
        },
      },
    ],
  },
]

export { MarketHeaders }
