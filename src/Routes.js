import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NotFound } from './Modules/Common'
import { PlayerSearch } from './Modules/PlayerSearch'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={PlayerSearch} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Routes
