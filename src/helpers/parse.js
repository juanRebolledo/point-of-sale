const parseFloatToCurrency = (value) => {
  const parsedValue = parseValueWithDecimals(value)
  return `$${new Intl.NumberFormat('en-US').format(parsedValue)}`
}

const parseValueWithDecimals = (value) => {
  // eslint-disable-next-line no-restricted-properties
  const fixed = Math.pow(10, 4)
  return Math.floor(value * fixed) / fixed
}

const parseValue = (n) => {
  if (typeof n !== 'number') {
    if (!isNaN(n) && n.length > 0) return parseFloat(n)
    return 0
  }

  return n
}

export { parseFloatToCurrency, parseValue, parseValueWithDecimals }
