import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "../pages/STATIC/navbar/navbar";
import Footer from "../pages/STATIC/footer/footer";

// import classes from "./Landing.css";

export class Landing extends Component {
  render() {
    console.log("Landing Page rendered!");
    return (
      <div>
        <Navbar />
        <div>
            Hello World!
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
