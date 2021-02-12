import React from 'react'
import Action from './Action/Action'

const Actions = ({ actionSelected, actions, id, isSelected, row, showModal }) => (
  <td className="table-action d-flex align-items-center justify-content-center">
    {actions.map((action) => {
      const key = `td-action-${id}-${action.hoverName}`
      return (
        <Action
          action={action}
          actionSelected={actionSelected}
          id={id}
          isSelected={isSelected}
          key={key}
          row={row}
          showModal={showModal}
        />
      )
    })}
  </td>
)

export default Actions
