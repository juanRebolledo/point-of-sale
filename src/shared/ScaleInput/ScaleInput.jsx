import React, { useEffect, useState } from 'react'
import { Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'shared'
import './ScaleInput.scss'

const ScaleInput = ({ getInnerValue, value, limitValue }) => {
  const [innerValue, setInnerValue] = useState(1)
  const limit = limitValue
  const rxValidation = /^\d+$/

  useEffect(() => {
    setInnerValue(value)
  }, [value])

  const increase = () => {
    const value = +innerValue + 1

    if (value > limit) return
    setInnerValue(value)

    if (getInnerValue) getInnerValue(value)
  }

  const decrease = () => {
    const value = +innerValue - 1

    if (value <= 0) return
    setInnerValue(value)

    if (getInnerValue) getInnerValue(value)
  }

  const handleOnChange = (event) => {
    let valueEvent = parseInt(event.target.value)
    if (rxValidation.test(valueEvent)) {
      setInnerValue(valueEvent)
      if (valueEvent > limit) {
        setInnerValue(limit)
        valueEvent = limit
      }
    } else {
      setInnerValue('')
      valueEvent = ''
    }
    if (getInnerValue) getInnerValue(valueEvent)
  }

  return (
    <div className="scaleinput">
      <div className="d-flex align-items-center">
        <Button className="decrease" color="red" onClick={decrease} type="button">
          <FontAwesomeIcon icon={faMinus} />
        </Button>

        <Input
          className="no-spinner"
          min={0}
          max={limit}
          onChange={handleOnChange}
          type="number"
          value={innerValue}
        />

        <Button className="increase" color="blue" onClick={increase} type="button">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </div>
  )
}

export default ScaleInput
