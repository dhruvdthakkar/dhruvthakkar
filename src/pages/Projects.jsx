import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import Navbar from "../pages/STATIC/navbar/navbar";
import Footer from "../pages/STATIC/footer/footer";

import classes from "./page.css";

export class Landing extends Component {
  render() {
    const project= [
      {
        head: "Recommendation System",
        description: "Recommend based on Movie, Music and Book. Bachelor's degree final year Project. Used Python, Django, and JavaScript, Jquery",
        website: {
          isLink: false, 
          Link: ""
        },
        Github: {
          isLink: true, 
          Link: "https://github.com/dhruvdeveloper/Recommendation-System"
        }
      },
      {
        head: "Portfolio",
        description: "Developed this portfolio using react, Material-UI, ExpressJS, and NodeJS. Also, used React-Router, Redux, and Redux-Thunk and created API using Asynchronous NodeJS Library. Implement Google Analytics.",
        website: {
          isLink: true, 
          Link: "https://dhruvdthakkar.com/"
        },
        Github: {
          isLink: true, 
          Link: "https://github.com/dhruvdeveloper/Portfolio-React"
        }
      },
      {
        head: "University Portal",
        description: "Runtime: Nodejs, Routing Framework: Express, View Template: Handlebars, Style Framework: Bootstrap."
        +" This Web application provides the online portal for university. Where a student can see the announcement, notes, homework. Where faculty can post announcements and upload notes from their side.",
        website: {
          isLink: false, 
          Link: ""
        },
        Github: {
          isLink: true, 
          Link: "https://github.com/dhruvdeveloper/University-Portal"
        }
      },
      {
        head: "Order Booking",
        description: "Order booking application using swing Java framework. In this application, It gets the order from the catalog code, create the receipt, store in the inventory and change the database of inventory.",
        website: {
          isLink: false, 
          Link: ""
        },
        Github: {
          isLink: true, 
          Link: "https://github.com/dhruvdeveloper/Order-Booking-UI"
        }
      },
      {
        head: "Order Booking (Console)",
        description: "Order booking console application, written in Java. In this application, It gets the order from the catalog code, create the receipt, store in the inventory and change the database of inventory.",
        website: {
          isLink: false, 
          Link: ""
        },
        Github: {
          isLink: true, 
          Link: "https://github.com/dhruvdeveloper/Order-Booking-Console"
        }
      },
      {
        head: "Price Take in Excel Sheet",
        description: "Console application, Developed in C++. It print the list name in excelsheet.",
        website: {
          isLink: false, 
          Link: ""
        },
        Github: {
          isLink: true, 
          Link: "https://github.com/dhruvdeveloper/PriceTaker-In-ExcelSheet"
        }
      },
      {
        head: "File Name Extract",
        description: "Extract file's name as list in text or JSON file.",
        website: {
          isLink: false, 
          Link: ""
        },
        Github: {
          isLink: true, 
          Link: "https://github.com/dhruvdeveloper/File-Name-Extract"
        }
      }
    ]
    console.log("Landing Page rendered!");
    return (
      <div>
        <Navbar />
        <div className={classes.projectContainer}>
          {project.map((el, index) => {
            return (
              <Grid container className={classes.projectContainerIn} key={index}>
                <Grid className={classes.desContainer} item xs={12} sm={12} md={6} lg={6} xl={6}>
                  <h3>
                    {el.head}
                  </h3>
                  <p>
                    {el.description}
                  </p>                    
                </Grid>
        
                <Grid className={classes.linkContainer} item xs={3} sm={3} md={3} lg={3} xl={3}>
                {el.Github.isLink ?
                  
                  <a href={el.Github.Link} target="_blank" className={classes.link} rel="noopener noreferrer"><GitHubIcon className={classes.icon} /></a>
                :<></>}
                </Grid>
                <Grid className={classes.linkContainer} item xs={3} sm={3} md={3} lg={3} xl={3}>
                {el.website.isLink ?
                  
                  <a href={el.website.Link} target="_blank" className={classes.link} rel="noopener noreferrer"><LanguageIcon className={classes.icon} /></a>
                :<></>}
                </Grid>
              </Grid>
            );
          })}          
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
