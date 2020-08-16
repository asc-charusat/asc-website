import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Grow  from '@material-ui/core/Grow';

import styles from "assets/jss/material-kit-react/views/teamPage.js";

// Sections for this page
import TeamSection from "./Sections/TeamSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function TeamPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="ASC - CHARUSAT"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/team-bg.jpeg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Our Team.</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Grow in>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeamSection />
        </div>
      </div>
      </Grow>
      <Footer />
    </div>
  );
}
