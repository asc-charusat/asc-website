import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/AboutUsSections/Domains.js";
const useStyles = makeStyles(styles);

export default function Domains() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Domains</h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button
            color="info"
            size="sm"
            fullWidth
            >
            <h3>Cloud Computing</h3>
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button
            color="info"
            size="sm"
            fullWidth
            >
            <h3>Machine Learning</h3>
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Button
            color="info"
            size="sm"
            fullWidth
            >
            <h3>Networking</h3>
          </Button>
        </GridItem>
        
      </GridContainer>
     </div>
  );
}
