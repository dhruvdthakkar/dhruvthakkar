import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../pages/STATIC/navbar/navbar";
import Footer from "../pages/STATIC/footer/footer";

import classes from "./page.css";

export class Landing extends Component {
  render() {
    console.log("Landing Page rendered!");
    return (
      <div className={classes.contact}>
        <Navbar />
        <div className={classes.contactContainer}>
          <h2>Contact Information</h2>
          <p><span className={classes.bold}>Email Id: </span>thakkardhruv97@gmail.com</p>
          <p><span className={classes.bold}>Cell No: </span>+1 (201)-356-7475</p>
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
