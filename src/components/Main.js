import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Resume from "./Resume";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Error from "./Error";

class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />

          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Route path="/error" component={Error} />
        </Switch>
      </div>
    );
  }
}

export default Main;
