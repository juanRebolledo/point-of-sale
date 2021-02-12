import React, { useState } from 'react'
import Actions from '../Actions/Actions'

function Row({ headers, index, row, showModal }) {
  const [rowData, setRowData] = useState(row)

  const onRowSelect = () => {
    row.selected = true
    setRowData({ ...rowData, selected: true })
  }

  return (
    // Todo: Change styles when item is selected
    <tr key={row.id}>
      {headers.map(({ key, actions }) => {
        const keyTd = `td-d-${key + index}`

        if (!actions) return <td key={keyTd}>{row[key]}</td>

        return (
          <Actions
            actions={actions}
            actionSelected={onRowSelect}
            id={index}
            isSelected={row.selected}
            key={keyTd}
            row={row}
            showModal={showModal}
          />
        )
      })}
    </tr>
  )
}

export default React.memo(Row)
