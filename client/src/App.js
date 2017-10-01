/*jshint esversion: 6 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Chat from './components/Chat'
import Ping from './components/Ping'
import Err from './components/Err'
import Login from './components/Login'
import Signup from './components/Signup'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/chats' component={Chat}/>
      <Route exact path='/ping' component={Ping}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={Signup}/>
      <Route path='*' component={Err}/>
    </Switch>
  </main>
)

class App extends Component {

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
