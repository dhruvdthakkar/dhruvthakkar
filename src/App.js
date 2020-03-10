import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// import logo from './logo.svg';
import classes from "./App.css";
import Landing from './pages/Landing';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Course from './pages/Course';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Switch>
          {/* Home router */}
          <Route path="/" exact component={Landing} />

          {/* Experience router */}
          <Route path="/experience" component={Experience} />

          {/* Projects router */}
          <Route path="/projects" exact component={Projects} />

          {/* Course router */}
          <Route path="/course" exact component={Course} />

          {/* Projects router */}
          <Route path="/activities" exact component={Activities} />

          {/* Projects router */}
          <Route path="/contact" exact component={Contact} />

        </Switch>
      </div>
    );
  }
}

export default App;
