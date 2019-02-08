import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PlayerSearch from './Modules/PlayerSearch'
import { NotFound } from './Modules/Common'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PlayerSearch} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
