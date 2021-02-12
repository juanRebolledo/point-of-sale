import React, { useState } from 'react'
import { Tooltip as TooltipReactstrap } from 'reactstrap'

const Tooltip = ({ idTarget, value }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen)

  return (
    <TooltipReactstrap isOpen={tooltipOpen} target={idTarget} toggle={toggleTooltip}>
      {value}
    </TooltipReactstrap>
  )
}

export default Tooltip
