import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UsersList from "./UsersList";
import Profile from "./Profile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UsersList} />
        <Route path="/profile/:userId" component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;
