import React from 'react'
import { Table as TableReactstrap } from 'reactstrap'
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import './Table.scss'

const Table = ({ data, headers, height, showModal, width = '100%' }) => (
  <div style={{ height, width }}>
    <TableReactstrap striped hover responsive>
      <TableHeader headers={headers} />
      <TableBody data={data} headers={headers} showModal={showModal} />
    </TableReactstrap>
  </div>
)

export default Table
