import React, { useEffect, useState } from 'react'
import { FormGroup, Input, Label } from 'reactstrap'

const SelectCategory = ({ data, onChange }) => {
  const [select, setSelect] = useState(0)

  const handleSelect = ({ target }) => {
    setSelect(target.value)
    onChange(target.value)
  }

  useEffect(() => {
    setSelect(0)
  }, [data])

  return (
    <FormGroup>
      <Label for="select-category">Selecciona una categoria</Label>
      <Input name="categories" id="select-category" onChange={handleSelect} type="select" value={select}>
        {data.map((category, index) => (
          <option key={category.id} value={index}>{category.name}</option>
        ))}
      </Input>
    </FormGroup>
  )
}

export default SelectCategory
