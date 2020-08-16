import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/contactPage";
import ContactSection from './Sections/ContactSection';
import Grow  from '@material-ui/core/Grow';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
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
        {...rest} />
      <Parallax filter small image={require("assets/img/contact-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Contact Us</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Grow in>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ContactSection />
        </div>
      </div>
      </Grow>
      <Footer />
    </div>
  );
}
