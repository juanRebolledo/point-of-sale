import { parseValue } from './parse'

const amountIsBiggerThanWholesale = (amount, amountWholesale) => (
  amountWholesale && parseValue(amount) >= parseValue(amountWholesale)
)

const calculateDiscount = (discount, price) => (
  parseValue(price) - parseValue(price) * (parseValue(discount) / 100)
)

const calculateSubtotal = (price, amount) => parseValue(price) * parseValue(amount)

const calculateValueWholesale = (priceWholesale, amount) => calculateSubtotal(priceWholesale, amount)

const calculateResultsFromProducts = (products) => {
  const totalValue = products.reduce((acc, current) => acc + parseFloat(current.total), 0)
  const ivaValue = totalValue * 0.16
  const subTotalValue = totalValue - ivaValue

  return {
    iva: ivaValue,
    subtotal: subTotalValue,
    total: totalValue,
  }
}

const calculateSubtotalFromProduct = (product) => {
  const { amount = 1 } = product

  if (amountIsBiggerThanWholesale(amount, product.wholesalePieces)) {
    if (product.discount) {
      return {
        ...product,
        productValue: calculateDiscount(product.discount, product.wholesalePrice),
        total: calculateDiscount(
          product.discount,
          calculateValueWholesale(product.wholesalePrice, amount),
        ),
      }
    }

    return {
      ...product,
      productValue: product.wholesalePrice,
      total: calculateValueWholesale(product.wholesalePrice, amount),
    }
  }

  if (product.discount) {
    return {
      ...product,
      productValue: calculateDiscount(product.discount, product.listPrice),
      total: calculateDiscount(product.discount, product.listPrice) * amount,
    }
  }

  return {
    ...product,
    productValue: product.listPrice,
    total: calculateSubtotal(product.listPrice, amount),
  }
}

export { calculateSubtotalFromProduct, calculateResultsFromProducts }
