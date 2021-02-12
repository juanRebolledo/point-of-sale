import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { parseFloatToCurrency } from 'helpers/parse'
import OptionsChartBar from './options'
import SelectProfitsDate from '../SelectProfitsDate/SelectProfitsDate'
import './Rounded'
import './Chart.scss'

const Chart = ({ data, months, setValues }) => {
  const [chartData, setChartData] = useState({ profits: [], totals: [] })
  const [monthsLabels, setMonthsLabels] = useState([])
  const { profits, totals } = chartData

  const initArray = () => {
    const array = []

    for (let i = 0; i < months.length; i++) array.push(0)

    return array
  }

  const sumFromData = () => {
    const arrProfit = initArray()
    const arrTotals = initArray()

    let profit = 0
    let total = 0

    data.forEach((value) => {
      const monthExact = value.date.substr(0, 7)
      profit += value.proffit
      total += value.total

      months.forEach(({ id }, index) => {
        if (id === monthExact) {
          arrProfit[index] += value.proffit
          arrTotals[index] += value.total
        }
      })
    })

    setValues({ profit: parseFloatToCurrency(profit), total: parseFloatToCurrency(total) })
    setChartData({ profits: arrProfit, totals: arrTotals })
  }

  useEffect(() => {
    sumFromData()

    if (months.every((item) => item.month === 'Ene')) setMonthsLabels(['Hoy'])
    else setMonthsLabels(months.map(({ month }) => month))
    // eslint-disable-next-line
  }, [data, months])

  const dataChart = {
    labels: monthsLabels,
    datasets: [
      {
        label: 'Ganancia',
        backgroundColor: '#fea41b',
        data: profits,
        categoryPercentage: 0.5,
        maxBarThickness: 18,
      },
      {
        label: 'Total',
        backgroundColor: '#4349f7',
        data: totals,
        categoryPercentage: 0.5,
        maxBarThickness: 18,
      },
    ],
  }

  return (
    <div className="chart-container">
      <SelectProfitsDate />
      <Bar data={dataChart} options={OptionsChartBar} />
    </div>
  )
}

export default Chart
