import React from 'react'
import TableRows from './TableRows'
import TableNotData from './TableNotData'

const TableBody = ({ data, headers, showModal }) => (
  <tbody>
    {data.length > 0 ? (
      <TableRows
        data={data}
        headers={headers}
        showModal={showModal}
      />
    ) : <TableNotData />}
  </tbody>
)

export default TableBody
