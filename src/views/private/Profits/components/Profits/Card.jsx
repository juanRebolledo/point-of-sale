import React from 'react'

const Card = ({ balance, className, text }) => (
  <div className={`card-income-container ${className}`}>
    <div className="card-text"><p>{text}</p></div>
    <div className="card-balance"><p>{`${balance}`}</p></div>
  </div>
)

export default Card
