import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import EmptyCart from '../components/EmptyCart'
import Cart from '../components/Cart'
import Purchase from '../components/Purchase'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/emptycart" exact component={EmptyCart} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/purchase" exact component={Purchase} />
    </Switch>
  )
}

export default Routes
