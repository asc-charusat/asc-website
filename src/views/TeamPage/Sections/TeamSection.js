import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/teamPageSections/teamStyle.js";

import team1 from "assets/img/team/pds.jpeg";
import team2 from "assets/img/team/spp.jpeg";
import team3 from "assets/img/team/prv.jpg";
import team4 from "assets/img/team/mp.jpg";
import team5 from "assets/img/team/bd.jpg";
import team6 from "assets/img/team/zb.jpg";
import team7 from "assets/img/team/tp.jpg";


const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <h2 className={classes.subtitle}>Our Mentors</h2>
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Dr. Parth Shah
                <br />
                <small className={classes.smallTitle}>Head of Department</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/dr-parth-shah-ba7ba842"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Sandip Patel
                <br />
                <small className={classes.smallTitle}>AWS Accredited Instructor</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/sandip9334/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/sandip9334"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <h2 className={classes.subtitle}>Our Team</h2>
        <GridContainer justify="center">            
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Manush Parikh
                <br />
                <small className={classes.smallTitle}>Lead</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="http://linkedin.com/in/manush-parikh-607507180"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/manush-7"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Pranav Bhuchhada
                <br />
                <small className={classes.smallTitle}>Lead</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/pranavbhuchhada"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/pranavbhuchhada"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={team5} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Bansi Delwadia
                <br />
                <small className={classes.smallTitle}>Lead</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/bansi-delwadia-a5224a188"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/18ce019"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={team6} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Zeeshan Bhati
                <br />
                <small className={classes.smallTitle}>Lead</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/zeeshanbhati99/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/zeeshanbhati"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={team7} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Tanha Patel
                <br />
                <small className={classes.smallTitle}>Lead</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://in.linkedin.com/in/tanharpatel"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/tanharpatel"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
