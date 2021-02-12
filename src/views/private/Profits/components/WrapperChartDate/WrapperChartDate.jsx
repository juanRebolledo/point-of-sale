import React, { useContext, useState } from 'react'
import useFirebaseFilterDateQuery from 'hooks/useFirebaseFilterDateQuery'
import { ProfitsContext } from 'containers/Profits/ProfitsContext'
import Spinner from 'shared/Spinner/Spinner'
import Chart from '../Chart/Chart'
import Card from '../Profits/Card'
import '../Profits/Card.css'
import './WrapperChart.css'

const WrapperChartDate = () => {
  const { start, months } = useContext(ProfitsContext)
  const { data, loading } = useFirebaseFilterDateQuery({ start, orderBy: 'date', uri: 'proffits' })
  const [values, setValues] = useState({ profit: 0, total: 0 })
  const { profit, total } = values

  return (
    <div className="wrapper-chart">
      {!loading
        ? (
          <>
            <div className="container-balance">
              <Card balance={profit} text="Ganancias" className="total" />
              <Card balance={total} text="Total" className="profit" />
            </div>
            <Chart {...{ data, months, setValues }} />
          </>
        )
        : <Spinner />}
    </div>
  )
}

export default WrapperChartDate
