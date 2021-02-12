import React from 'react'
import './Spinner.scss'

const Spinner = ({ size }) => (
  <div className="papaSpinner">
    <div id="loader" style={{ width: size, height: size }}>
      <div />
      <div />
    </div>
  </div>
)

Spinner.defaultProps = {
  size: 100,
}

export default Spinner
