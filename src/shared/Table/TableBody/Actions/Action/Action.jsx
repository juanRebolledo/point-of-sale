import React, { useState } from 'react'
// import { Tooltip } from 'reactstrap'
import FormModal from 'shared/formik/FormModal/FormModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Action = ({ action, actionSelected, id, isSelected, row }) => {
  const {
    color,
    colorButton,
    component,
    disable,
    hoverName,
    icon,
    onCompleteForm,
    submitText,
    validationSchema,
  } = action
  const [modal, setModal] = useState(false)
  const idTarget = `ac-tolt-${id}-${hoverName}`

  const actionIsNotDisable = !(disable && row[disable.prop] === disable.value)

  const actionStyle = {
    backgroundColor: !isSelected && actionIsNotDisable ? color : '#ccc',
    cursor: !isSelected && actionIsNotDisable ? 'pointer' : ' no-drop',
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  const preventDefault = (e) => {
    e.preventDefault()
    if (!isSelected) {
      if (onCompleteForm && !component) {
        actionSelected()
        onCompleteForm(row)
      }
      setModal(true)
    }
  }

  return (
    <a className="mx-2 py-1 px-3 rounded" href="#action" style={actionStyle} onClick={preventDefault}>
      <FontAwesomeIcon color="#fff" size="sm" id={idTarget} icon={icon} />
      {component && onCompleteForm && (
        <FormModal
          colorButton={colorButton}
          title={hoverName}
          initialValues={row}
          modal={modal}
          submitText={submitText || hoverName}
          toggle={toggleModal}
          onCompleteForm={onCompleteForm}
          validationSchema={validationSchema}
        >
          {(row) => component(row)}
        </FormModal>
      )}
    </a>
  )
}

export default Action
