const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

const twoDigits = (str) => (str < 10 ? `0${str}` : str)

const dateFormatted = ({ date, isNotDay }) => {
  const d = new Date(date)
  let month = `${d.getMonth() + 1}`
  let day = `${d.getDate()}`
  const year = d.getFullYear()

  if (month.length < 2) { month = `0${month}` }
  if (day.length < 2) { day = `0${day}` }

  if (isNotDay) return [year, month].join('-')

  return [year, month, day].join('-')
}

const handlerArrayMonths = (from = 0) => {
  const arrMonths = []
  for (let i = from; i >= 0; i--) {
    const { month, year } = getLastNMonths(i)
    const monthTwoDigits = twoDigits(month + 1)
    arrMonths.push({ month: months[month], id: `${year}-${monthTwoDigits}` })
  }

  return arrMonths
}

const getLastNMonths = (n) => {
  const date = new Date()
  if (!n) return { month: date.getMonth(), year: date.getFullYear() }

  const newMonth = date.getMonth() - n

  date.setMonth(newMonth)
  return { month: date.getMonth(), year: date.getFullYear() }
}

const handlerSelectedMonths = ({ from, setMonths, setStart }) => {
  setMonths(handlerArrayMonths(from))

  const date = new Date()
  if (!from) return setStart(dateFormatted({ date }))

  date.setMonth(date.getMonth() - from)
  setStart(dateFormatted({ date }))
}

export { dateFormatted, handlerSelectedMonths }
