import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/AboutUsSections/WeDo";
const useStyles = makeStyles(styles);

export default function WeDoSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What We Do{"?"}</h2>
          <h4 className={classes.description}>ASC interacts with various forms, from doing meetups to expert talk sessions, from seminars to workshop and hands on sessions, from AWS to Alexa, additional to this live projections and demonstration will be featured to empower the community built around us.</h4>
        </GridItem>
      </GridContainer>
     </div>
  );
}
