import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/EventsPageSection/PastEvents";

import event1 from "assets/img/events/AWS-CloudPractitioner.png";
import event2 from "assets/img/events/AWS-SolArchitect.png";

const useStyles = makeStyles(styles);

export default function PastEvents() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>AWS Academy</h2>
        </GridItem>
        
        <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={event1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                AWS Cloud Practitioner
                <br />
              <h4 className={classes.title}>Wait For Next Date </h4>
                {/* <h4 className={classes.title}>Register Your Self: <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNMa0OeO8NBc7GRgLysbhXJ8ka00sCC63E7Fqu3peFwtkvwA/viewform?usp=sf_link">Click here</a></h4> */}
              </h4>
              <CardBody>
                <p className={classes.description}>

                </p>
              </CardBody>
            </Card>
          </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card plain>
            <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
              <img src={event2} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
            Aws Solution Architect
              <br />
              <h4 className={classes.title}>Register Your Self: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTCmWjsEpbsp_WuRP3wonvZUIllEBp5Vfaohr1eKd7hJx6Ww/viewform?usp=sf_link">Click here</a></h4>
              {/* <h4 className={classes.title}>Wait For Next Date </h4> */}
            </h4>
            <CardBody>
              <p className={classes.description}>
              </p>
            </CardBody>
          </Card>
        </GridItem>
        
      </GridContainer>
     </div>
  );
}
