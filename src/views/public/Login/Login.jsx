import React from 'react'
import cashRegisterImage from 'assets/img/retailer.png'
import LoginForm from './components/LoginForm/LoginForm'

const LoginView = () => {
  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center">
      <img alt="punto de venta" src={cashRegisterImage} />
      <LoginForm />
    </div>
  )
}

export default LoginView
