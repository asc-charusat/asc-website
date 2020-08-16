import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";



import styles from "assets/jss/material-kit-react/views/home";
import logo from "assets/img/favicon.png";
import Button from "components/CustomButtons/Button.js";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        brand="ASC - CHARUSAT"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest} />
      <Parallax image={require("assets/img/home-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer justify="center" alignItems="center">
            <GridItem xs={4} sm={4} md={2}>
                <img src={logo} alt="ASC-CHARUSAT" className={imageClasses}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <div className={classes.brand}>
                <h1 className={classes.title}>AWS Students' Club</h1>
                <h3 className={classes.subtitle}>
                  Seed Cloud, Get Rain On Demand
                </h3>
                <Button
                  href="/about"
                  color="info"
                  size="sm"
                  style={{marginTop:"20px"}}
                  round
                  >
                  <h4>Learn More</h4>
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
