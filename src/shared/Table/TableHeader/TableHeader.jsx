import React from 'react'

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(({ key, name }) => (
        <th className={key === 'actions' ? 'table-action' : ''} key={key}>{name}</th>))}
    </tr>
  </thead>
)

export default React.memo(TableHeader)
