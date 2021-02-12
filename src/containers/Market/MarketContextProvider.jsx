import React, { createContext, useReducer, useEffect } from 'react'
import marketReducer from 'containers/Market/Reducer/Market'
import { showResults } from 'containers/Market/Actions/Market'
import Market from 'views/private/Market/Market'
import { initialState } from './initialState'

const MarketContext = createContext()

const MarketView = () => {
  const [state, dispatch] = useReducer(marketReducer, initialState)
  const { products, results } = state

  useEffect(() => {
    dispatch(showResults())
  }, [products])

  return (
    <MarketContext.Provider value={{ dispatch, products, results }}>
      <Market />
    </MarketContext.Provider>
  )
}

export { MarketContext, MarketView }
