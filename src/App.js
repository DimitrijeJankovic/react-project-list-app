import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'

// components
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/projects/ProjectDetails'
import SingIn from './components/auth/SignIn'
import SingUp from './components/auth/SingUp'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path='/project/:id' component={ProjectDetails} />
        <Route path='/singin' component={SingIn} />
        <Route path='/singup' component={SingUp} />
      </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
