import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login'; 
import PrivateRoute from './components/PrivateRoute';


import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to='/Login'>Login</Link>
        </li>
        <li>
          <Link to="/friends">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" />
          <Route path="/Login" component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;