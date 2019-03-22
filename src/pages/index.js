import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './login/Login';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/timeline" component={Home} />
            <Route path="/invalid" render={(props)=><Login {...props} invalid="True"/>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
