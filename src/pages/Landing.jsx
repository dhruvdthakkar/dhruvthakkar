import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

import Navbar from "../pages/STATIC/navbar/navbar";
import Footer from "../pages/STATIC/footer/footer";
import PDF from "../Assets/Resume_IT.pdf";

import classes from "./page.css";
import MyDp from "../Image/MyDp2.svg";

export class Landing extends Component {
  render() {
    console.log("Landing Page rendered!");
    return (
      <div>
        <Navbar />
        <div className={classes.landing}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div className={classes.cardHolder}>
              <div className={classes.bgPurpleOne}>
                <div className={classes.offerCard}>
                  <img src={MyDp} alt="My DP!" className={classes.myDp}/>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <div className={classes.cardHolder}>
              <div className={classes.bgPurpleTwo}>
                <div className={classes.offerCard}>
                  <h2>Major: Computer Science</h2>
                  <p>Graduate student at The University of Texas at Arlington</p>
                  <p>Actively looking for Winter and Spring Internship in software and web development.</p>
                  <p>Dallas/Fort Worth Area</p>
                  <br />
                  <Grid container>
                    <Grid className={classes.buttonGrp} item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Button variant="outlined" target="_blank" color="primary" href={PDF}>
                      Download My Resume
                    </Button>
                    </Grid>
                    <Grid className={classes.buttonGrp} item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Button variant="outlined" target="_blank" color="primary" href="https://github.com/dhruvdeveloper">
                        Github
                      </Button>
                    </Grid>
                    <Grid className={classes.buttonGrp} item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Button variant="outlined" target="_blank" color="primary" href="https://www.linkedin.com/in/dhruvdthakkar/">
                        LinkedIn
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
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
