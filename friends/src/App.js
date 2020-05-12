import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login.js";
// import Friends from "./components/Friends";
import AddFriend from "./hooks/useForm";
import PrivateRoute from "./components/PrivateRoute.js";

//import AddFriend from "./hooks/useForm";//

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/useForm">Friends</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/useForm" component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;