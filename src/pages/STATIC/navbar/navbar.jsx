import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton/IconButton";
import BarSvg from "@material-ui/icons/DehazeRounded";
import Drawer from "@material-ui/core/Drawer";

import classes from "./navbar.css";
import * as actionCreators from "../../../store/actions/index";

class Navbar extends Component {
  render() {
    console.log("Navbar rendered!");
    return (
      <div className={classes.navbar}>
        <span className={classes.buttonBar}>
          <IconButton onClick={() => this.props.onToggleDrawer(!this.props.toggle)}>
            <BarSvg />
          </IconButton>
        </span>
        <Drawer
          anchor="top"
          open={this.props.toggle}
          onClose={() => this.props.onToggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.props.onToggleDrawer(false)}
            onKeyDown={() => this.props.onToggleDrawer(false)}
          >
            <ul className={classes.unOrderList}>
              <li>
                <NavLink className={classes.linkResponcive} activeClassName={classes.active} to="/experience">
                  Experience
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink className={classes.linkResponcive} activeClassName={classes.active} to="/course">
                  Skills
                </NavLink>
              </li>
              <br />
              <li>
                <NavLink className={classes.linkResponcive} activeClassName={classes.active} to="/projects">
                  Projects
                </NavLink>
              </li>
              <br />
              {/* <li>
                <NavLink className={classes.linkResponcive} to="/activities">
                  Activities
                </NavLink>
              </li> */}
              <li>
                <NavLink className={classes.linkResponcive} activeClassName={classes.active} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </Drawer>
        <NavLink className={classes.link} id={classes.headId} to="/">
          Dhruv Thakkar
        </NavLink>
        <NavLink className={classes.link} activeClassName={classes.active} to="/experience">
          Experience
        </NavLink>
        <NavLink className={classes.link} activeClassName={classes.active} to="/course">
          Skills
        </NavLink>
        <NavLink className={classes.link} activeClassName={classes.active} to="/projects">
          Projects
        </NavLink>        
        {/* <NavLink className={classes.link} activeClassName={classes.active} to="/activities">
          Activities
        </NavLink> */}
        <NavLink className={classes.link} activeClassName={classes.active} to="/contact">
          Contact
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    toggle: state.navbar.toggle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleDrawer: bool => dispatch(actionCreators.toggleDrawer(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
