import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className='container pt-5 pb-5'>
        <Switch>
          <Route path='/404' component={NotFound}/>
          <Redirect to='/404'/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
