import React, { useContext } from 'react'
import { UserContext } from 'containers/User/UserContext'
import Routes from 'routes/Routes'
import SimpleModal from 'shared/Modal/SimpleModal'

const App = () => {
  const { errorFirebase, setErrorFirebase } = useContext(UserContext)

  const removeErrorFirebase = () => setErrorFirebase(false)

  return (
    <>
      <Routes />
      <SimpleModal
        showBtnCancel={false}
        colorButton="red"
        disableRenderProps
        modal={errorFirebase}
        title="Guarda la calma"
        toggle={removeErrorFirebase}
        submitText="Cerrar"
      >
        <h2>Ha ocurrido un error!</h2>
        <p>
          Si esto persiste despues de unos minutos
          contactese con Emmanuel o Juan (Dile a Emmanuel)
        </p>
      </SimpleModal>
    </>
  )
}

export default App
