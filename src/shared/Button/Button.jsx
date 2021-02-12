import React from 'react'
import cnames from 'classnames'

const Button = (props) => {
  const { children, className, color, onClick, type } = props
  const classColor = `button-${color}`
  const classes = cnames('btn button', className, classColor)

  return (
    <button {...props} className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
