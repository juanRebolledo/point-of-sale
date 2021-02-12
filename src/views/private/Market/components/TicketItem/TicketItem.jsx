import React from 'react'
import cnames from 'classnames'
import Tooltip from './Tooltip'

const TicketDetailItem = ({ amount, amountClass, containerClass, idTooltipName, itemName,
  itemNameClass, value, valueClass }) => {
  const classes = {
    amount: cnames('flex-shrink-0 ml-1', amountClass),
    container: cnames('d-flex mb-1', containerClass),
    name: cnames(itemNameClass),
    value: cnames('ml-auto text-right', valueClass),
  }

  return (
    <p className={classes.container}>
      <span id={idTooltipName} className={classes.name} title={itemName}>{itemName}</span>
      {idTooltipName && <Tooltip idTarget={idTooltipName} value={itemName} />}

      {amount && <span className={classes.amount}>{`x ${amount}`}</span>}
      <span className={classes.value}>{value}</span>
    </p>
  )
}

export default TicketDetailItem
