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

import pds from "assets/img/team/pds.jpeg";
import spp from "assets/img/team/spp.jpeg";
import mp from "assets/img/team/mp.jpg";
import bd from "assets/img/team/bd.jpg";
import pb from "assets/img/team/pb.jpg";
import hv from "assets/img/team/hv.jpg";
import bs from "assets/img/team/bs.jpg";
import mb from "assets/img/team/mb.jpg";
import mr from "assets/img/team/mr.jpg";
import vp from "assets/img/team/vp.jpg";
import hp from "assets/img/team/hp.jpg";

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
                <img src={spp} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Sandip Patel
                <br />
                <small className={classes.smallTitle}>
                  AWS Accredited Instructor, AWS Community Builder <br /> & ASC Club Lead  
                </small>
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
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={pds} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Dr. Parth Shah
                <br />
                <small className={classes.smallTitle}>Head of Department & Club Lead </small>
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
        </GridContainer>
        <h2 className={classes.subtitle}>Our Team</h2>

{/*  */}

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={bd} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Bansi Delwadia
                <br />
                <small className={classes.smallTitle}>ASC Student Club Lead</small>
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
                  href="https://github.com/BansiDelwadia"
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

{/*  */}

          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={mp} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Manush Parikh
                <br />
                <small className={classes.smallTitle}>Alumini, Advisor</small>
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

{/*  */}
          
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={pb} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Pranav Bhuchhada
                <br />
                <small className={classes.smallTitle}>Alumini, Advisor</small>
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

{/*  */}

          
        </GridContainer>

{/*  */}

        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={hv} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Harsh Viradia
                <br />
                <small className={classes.smallTitle}>Technical Advisor</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/harsh-viradia-3a5386191/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/harshviradia"
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

{/*  */}

          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={bs} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Brughu Sharma
                <br />
                <small className={classes.smallTitle}>Technical Advisor</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/bhrugu-sharma"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/kakashi96"
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

{/*  */}

          
        </GridContainer>

{/*  */}

        <GridContainer justify="center">

        <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={mb} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Mayur Bhatti
                <br />
                <small className={classes.smallTitle}>Cloud Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/themaybhatti/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/themaybhatti"
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

{/*  */}

          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={vp} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Viraj Patva
                <br />
                <small className={classes.smallTitle}>Content Writer</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/viraj-patva-19it117/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/19IT117"
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

{/*  */}
          
          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={hp} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Heer Patel
                <br />
                <small className={classes.smallTitle}>Graphic Designer</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/heer-patel-700235206/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/heerpatell"
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

{/*  */}

          <GridItem xs={12} sm={12} md={3}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={mr} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Maharshi Relia
                <br />
                <small className={classes.smallTitle}>Graphic Designer</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/maharshirelia"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/maharshirelia"
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

{/*  */}

        
      </div>
    </div>
  );
}
