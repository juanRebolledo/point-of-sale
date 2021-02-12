import { dateFormatted, handlerSelectedMonths } from 'helpers/Date'
import React, { createContext, useEffect, useState } from 'react'

const ProfitsContext = createContext()

const ProfitsContextProvider = ({ children }) => {
  const auxDate = new Date()
  const dateStart = dateFormatted(auxDate)
  const [dateSelected, setDateSelected] = useState('today')
  const [start, setStart] = useState(dateStart)
  const [months, setMonths] = useState([])

  useEffect(() => {
    let from
    if (dateSelected !== 'today') { from = parseInt(dateSelected) }

    handlerSelectedMonths({ from, setMonths, setStart })
  }, [dateSelected])

  return (
    <ProfitsContext.Provider value={{ dateSelected, setDateSelected, start, months }}>
      {children}
    </ProfitsContext.Provider>
  )
}

export { ProfitsContext, ProfitsContextProvider }
