import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Route, Switch, HashRouter } from "react-router-dom";


import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Home from "views/Home/Home";
import AboutPage from "views/AboutUs/AboutUs";
import EventsPage from "views/EventsPage/EventsPage";
import RegisterYourSelf from "views/Registration/RegistrationPage";
import TeamPage from "views/TeamPage/TeamPage";
import ContactPage from "views/ContactPage/ContactPage";

var hist = createBrowserHistory()

ReactDOM.render(
  <>
  <HashRouter history={hist}>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/RegisterYourSelf" component={RegisterYourSelf} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/" component={Home} />
    </Switch>
  </HashRouter>
  </>,
  document.getElementById("root")
);
