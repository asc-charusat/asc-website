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

import event1 from "assets/img/events/event1.png";
import event2 from "assets/img/events/event2.jpg";
import event3 from "assets/img/events/event3.png";
import OctoberSeries from "assets/img/events/october-series.jpg";

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
          <h2 className={classes.title}>Past Events</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={event1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                AWSome Day
                <br />
                <small className={classes.smallTitle}>Date: 3rd March, 2020</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  AWSome Days are free, one-day events that are delivered by AWS technical instructors. This event is ideal for technical leaders, IT Professionals and developers who are eager to learn more about cloud computing and get introductory training on AWS products.
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
              Cloud -a- Thon
              <br />
              <small className={classes.smallTitle}>Date: 28th March, 2020</small>
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
              <img src={event3} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
              ASC Webinar
              <br />
              <small className={classes.smallTitle}>Date: 15 - 16 April, 2020</small>
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
              <img src={OctoberSeries} alt="..." className={imageClasses} />
            </GridItem>
            <h4 className={classes.cardTitle}>
              October-Series
              <br />
              <small className={classes.smallTitle}>Date: 15th October, 2020: Amazon App Stream</small>
              <br />
              <small className={classes.smallTitle}>Date: 16th October, 2020: Security Cost Pillar</small>
              <br />
              <small className={classes.smallTitle}>Date: 17th October, 2020: Docker on AWS</small>
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
