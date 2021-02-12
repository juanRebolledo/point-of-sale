import React, { useContext } from 'react'
import { ProfitsContext } from 'containers/Profits/ProfitsContext'
import { Input } from 'reactstrap'

const SelectProfitsDate = () => {
  const { dateSelected, setDateSelected } = useContext(ProfitsContext)

  const handleChangeValue = ({ target }) => setDateSelected(target.value)

  return (
    <Input onChange={handleChangeValue} type="select" value={dateSelected}>
      <option value="today">Hoy</option>
      <option value="1">1 mes</option>
      <option value="2">2 meses</option>
      <option value="3">3 meses</option>
      <option value="6">6 meses</option>
      <option value="12">1 año</option>
    </Input>
  )
}

export default SelectProfitsDate
