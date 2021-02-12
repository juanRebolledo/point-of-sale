import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={(props) => (!auth ? <Component {...props} /> : <Redirect to="/admin/inicio" />)} />
)

export default PublicRoute
