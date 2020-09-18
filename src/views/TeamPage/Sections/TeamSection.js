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
import prv from "assets/img/team/prv.jpg";
import mp from "assets/img/team/mp.jpg";
import bd from "assets/img/team/bd.jpg";
import aks from "assets/img/team/aks.jpg";
import ap from "assets/img/team/ap.jpg";
import ans from "assets/img/team/ans.jpg";
import mr from "assets/img/team/mr.jpg";
import mj from "assets/img/team/mj.jpg";
import nk from "assets/img/team/nk.jpg";
import np from "assets/img/team/np.jpg";
import ss from "assets/img/team/ss.jpeg";
import sa from "assets/img/team/sa.jpg";
import sua from "assets/img/team/sua.jpg";

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
                  AWS Accredited Instructor
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
        </GridContainer>
        <h2 className={classes.subtitle}>Our Team</h2>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={bd} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Bansi Delwadia
                <br />
                <small className={classes.smallTitle}>Club Lead</small>
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
                <img src={prv} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Pranav Bhuchhada
                <br />
                <small className={classes.smallTitle}>Technical Advisor</small>
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
                <img src={mp} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Manush Parikh
                <br />
                <small className={classes.smallTitle}>Technical Advisor</small>
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
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={aks} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Akshit Soneji
                <br />
                <small className={classes.smallTitle}>Web Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/akshit-soneji/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/AKSHIT989"
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
                <img src={ap} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Aniket Patel
                <br />
                <small className={classes.smallTitle}>Cloud Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/aniket-patel-2a52851a3"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/aniketpatel12"
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
                <img src={ans} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Anushka Sandesara
                <br />
                <small className={classes.smallTitle}>ML Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/anushka-sandesara-0a0870179/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/anusandesara"
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
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={mr} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Maharshi Relia
                <br />
                <small className={classes.smallTitle}>Creative Team</small>
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
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={mj} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Muskan Jindal
                <br />
                <small className={classes.smallTitle}>Cloud Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/muskan-jindal-078187182/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/muskanjindal24"
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
                <img src={nk} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Namrata Khatwani
                <br />
                <small className={classes.smallTitle}>Creative Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/namrata-khatwani"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/namrata-khatwani"
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
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={9} className={classes.itemGrid}>
                <img src={np} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Neel Patel
                <br />
                <small className={classes.smallTitle}>ML Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/neel-patel-b81734151"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/neel004"
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
                <img src={ss} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Shreyanshi Shah
                <br />
                <small className={classes.smallTitle}>Creative Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/shreyanshishah/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/shreyanshi0909"
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
                <img src={sa} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Shyamkumar Aghera
                <br />
                <small className={classes.smallTitle}>Cloud Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/shyamkumar-aghera-88b726171"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/agherashyam2000"
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
                <img src={sua} alt="..." className={imageClasses} />
              </GridItem>
              <h3 className={classes.cardTitle}>
                Sunny Agrawal
                <br />
                <small className={classes.smallTitle}>Cloud Team</small>
              </h3>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  href="https://www.linkedin.com/in/sunny-agrawal-025a71181/"
                  target="_blank"
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  href="https://github.com/SunnyAgrawal1208"
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
