/* eslint-disable react/no-array-index-key */
import React from 'react'
import Row from './Row/Row'

const TableRows = ({ data, headers, showModal }) => data.map((row, index) => (
  <Row {...{ headers, index, row, showModal }} key={index} />
))

export default TableRows
