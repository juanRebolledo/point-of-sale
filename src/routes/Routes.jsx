import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginView from 'views/public/Login/Login'
import HomeView from 'views/private/Home/Home'
import InventoryView from 'views/private/Inventory/Inventories'
import { MarketView } from 'containers/Market/MarketContextProvider'
import ProductsView from 'views/private/Products/Products'
import ProfitsView from 'views/private/Profits/Profits'
import ProvidersView from 'views/private/Providers/Providers'
import UsersView from 'views/private/Users/Users'
import NotFound from 'views/public/NotFound/NotFound'
import { UserContext } from 'containers/User/UserContext'
import PublicRoute from './public/PublicRoute'
import PrivateRoute from './private/PrivateRoute'

function AppRouter() {
  const { auth } = useContext(UserContext)
  return (
    <Switch>
      <PublicRoute path="/" component={LoginView} auth={auth} exact />
      <PrivateRoute path="/admin/inicio" component={HomeView} auth={auth} exact />
      <PrivateRoute path="/admin/:id/ganancias" component={ProfitsView} auth={auth} exact />
      <PrivateRoute path="/admin/:id/inventario/:id" component={ProductsView} auth={auth} exact />
      <PrivateRoute path="/admin/:id/inventario" component={InventoryView} auth={auth} exact />
      <PrivateRoute path="/admin/:id/proveedores" component={ProvidersView} auth={auth} exact />
      <PrivateRoute path="/admin/:id/usuarios" component={UsersView} auth={auth} exact />
      <PrivateRoute path="/admin/:id/vender" component={MarketView} auth={auth} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default AppRouter
