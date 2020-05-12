import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login.js";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/Friends">Friends</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/Friends" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;