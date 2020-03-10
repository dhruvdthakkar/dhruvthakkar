import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import Navbar from "./STATIC/navbar/navbar";
import Footer from "./STATIC/footer/footer";

import classes from "./page.css";

export class Experience extends Component {
  render() {
    console.log("Landing Page rendered!");
    return (
      <div>
        <div className={classes.experienceRoot}>
        <Navbar />
        <div className={classes.experience}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className={classes.rumonkData}>
              <h2>Rumonk Education</h2>
              <p>Startup - Co-Founder/Full Stack developer</p>
              <p>
                Developing educational website using MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack.
                Utilized MaterialUI, ReactJS and other latest technologies for front end development.
                Developing user authentication using firebase API.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ComputerOutlinedIcon className={classes.computerIcon}/>
          </Grid>
        </Grid>
        <hr />
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className={classes.sooryenData}>
              <h2>Sooryen Technologies an indecomm company</h2>
              <p>Ahmedabad, Gujarat, India.</p>
              <p>
              Software Engineer (Java) <br />
Improved application functionality using JAVA Advanced, Spring and ReactJS. Implemented
new functionality and improved performance of web application using JAVA, Spring, MySQL
and ReactJS.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <LocationCityIcon className={classes.companyIcon}/>
          </Grid>
        </Grid>
        </div>
        <div className={classes.clearBoth} />
        <Footer />
        </div>
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
)(Experience);
