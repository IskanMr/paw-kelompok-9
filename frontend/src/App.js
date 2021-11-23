import React from "react";
import CreateEmployee from "./component/CreateEmployee";
import EditEmployee from "./component/EditEmployee";
import ListEmployee from "./component/ListEmployee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={ListEmployee} />
          <Route path="/edit/:id" component={EditEmployee} />
          <Route path="/create" component={CreateEmployee} />
        </Switch>
      </Router>
    </>
  );
}

export default App;