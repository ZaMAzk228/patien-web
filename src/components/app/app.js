<<<<<<< HEAD
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './app.css';

import {FirstPages,Register, Login,Priem} from '../pages';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={FirstPages}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/priem" component={Priem}/>
          </Switch>
        </div>
      </div>
    </div>
  )
}

=======
import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './app.css';

import {FirstPages,Register, Login,Priem} from '../pages';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={FirstPages}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/priem" component={Priem}/>
          </Switch>
        </div>
      </div>
    </div>
  )
}

>>>>>>> a7d145025493c05a9a956642aca853915100bc69
export default App;