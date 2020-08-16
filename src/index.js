import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";


import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Home from "views/Home/Home";
import AboutPage from "views/AboutUs/AboutUs";
import EventsPage from "views/EventsPage/EventsPage";
import TeamPage from "views/TeamPage/TeamPage";
import ContactPage from "views/ContactPage/ContactPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <>
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
  </>,
  document.getElementById("root")
);
