import React from 'react'
import Layout from 'layout/Layout'
import { ProfitsContextProvider } from 'containers/Profits/ProfitsContext'
import WrapperChartDate from './components/WrapperChartDate/WrapperChartDate'

const Profits = () => {
  return (
    <ProfitsContextProvider>
      <Layout>
        <WrapperChartDate />
      </Layout>
    </ProfitsContextProvider>
  )
}

export default Profits
