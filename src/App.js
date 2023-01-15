import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div className='mx-auto pt-5 pb-5 offset-md-3 col-md-6'>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/404' component={NotFound}/>
          <Redirect to='/404'/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
