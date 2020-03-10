import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CodeIcon from '@material-ui/icons/Code';

import Navbar from "../pages/STATIC/navbar/navbar";
import Footer from "../pages/STATIC/footer/footer";

import classes from "./page.css";

export class Landing extends Component {
  render() {
    console.log("Landing Page rendered!");
    return (
      <div>
        <Navbar />
        <div className={classes.skillContainer}>
        <h2>Skills</h2>
        <hr />
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <CodeIcon className={classes.codeIcon}/>
          </Grid>
          <Grid className={classes.skillsSet} item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Grid container>
              <Grid className={classes.skillsList} item xs={4} sm={4} md={4} lg={4} xl={4}>
                Operating Systems
              </Grid>
              <Grid className={classes.skillsList} item xs={8} sm={8} md={8} lg={8} xl={8}>
                Windows, Linux, Unix
              </Grid>
              <Grid className={classes.skillsList} item xs={4} sm={4} md={4} lg={4} xl={4}>
                Programming Languages
              </Grid>
              <Grid className={classes.skillsList} item xs={8} sm={8} md={8} lg={8} xl={8}>
                Java, Python, CPP, PHP
              </Grid>
              <Grid className={classes.skillsList} item xs={4} sm={4} md={4} lg={4} xl={4}>
                Database Systems
              </Grid>
              <Grid className={classes.skillsList} item xs={8} sm={8} md={8} lg={8} xl={8}>
                MySql, Mongodb
              </Grid>
              <Grid className={classes.skillsList} item xs={4} sm={4} md={4} lg={4} xl={4}>
                Web Technologies / Scripting languages
              </Grid>
              <Grid className={classes.skillsList} item xs={8} sm={8} md={8} lg={8} xl={8}>
                HTML, CSS, JavaScript, NodeJS, Spring, Django, ReactJS,
  Redux, ExpressJS, jQuery, Mongoose, MaterialUI,
  AngularJS, Bootstrap, AJAX, React-Router, Redux-Thunk, Axios
              </Grid>
              <Grid className={classes.skillsList} item xs={4} sm={4} md={4} lg={4} xl={4}>
                Other Tools / Software
              </Grid>
              <Grid className={classes.skillsList} item xs={8} sm={8} md={8} lg={8} xl={8}>
                WebStorm, PyCharm, IntelliJ IDEA, Net Beans, Eclipse,
VSCode, GitHub, Bitbucket, JIRA, Gitlab, WordPress,
node package manager (NPM), Maven, Chrome Dev Tool,
Word, Excel, PowerPoint
              </Grid>
              <Grid className={classes.skillsList} item xs={4} sm={4} md={4} lg={4} xl={4}>
                Version Control
              </Grid>
              <Grid className={classes.skillsList} item xs={8} sm={8} md={8} lg={8} xl={8}>
                Git
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //ctr: state.ctr.counter,
    //storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onIncrementCounter: () => dispatch(actionCreators.increment()),
    // onDecrementCounter: () => dispatch(actionCreators.decrement()),
    // onAddCounter: () => dispatch(actionCreators.add(10)),
    // onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
    // onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    // onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
