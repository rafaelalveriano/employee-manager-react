import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Component from './Components'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Component.Employees} />
        <Route path="/cargos" component={Component.Responsibilities} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
