import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/aboutPage.js";
import WeDoSection from './Sections/WeDoSection';
import SectionCarousel from './Sections/SectionCarousel';
import Domains from './Sections/Domains';
import Grow  from '@material-ui/core/Grow';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AboutPage(props) {
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
      <Parallax filter image={require("assets/img/about-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>About Us.</h1>
              <h4 className={classes.subtitle}>
                Together as a Club ASC aims to provide a platform for the intellectuals to learn and explore the Cloud fundamentals of AWS. As a part of the club we assure that every individual gets something productive out of this club. ACS intends to bring developers under one roof to create a community to inspire many. The club will be channeled into propagating learning and teaching symbiotically.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Grow in>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WeDoSection />
          <Domains />
          <SectionCarousel />
          <Button 
            style={{marginBottom:"50px",left:"50%",transform: "translate(-50%,0%)"}}
            color="rose"
            size="lg"
            target="_blank"
            href="joinus.html"
            round 
            >
            Become a Member
          </Button>
        </div>
      </div>
      </Grow>
      <Footer />
    </div>
  );
}
