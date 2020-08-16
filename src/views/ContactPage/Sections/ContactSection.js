import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Iframe from 'react-iframe'
import styles from "assets/jss/material-kit-react/views/ContactPageSection/Contact";
const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={5}>
          <h4 className={classes.title}>Address</h4>
          <h4 className={classes.description}>
          AWS Students' Club,<br />
          Charotar University of Science {"&"} Technology,<br />
          CHARUSAT Campus,<br />
          Off. Nadiad-Petlad Highway, Changa<br />
          Anand, Gujarat, INDIA<br />
          Pin - 388421<br />
          </h4>
          <h4 className={classes.title}>E - Mail</h4>
          <h4 className={classes.description}><a href="mailto:asc.club@charusat.edu.in">asc.club@charusat.edu.in</a></h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={7}>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.7289551980155!2d72.81728902153779!3d22.59936948858315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e50cdaaaaaaab%3A0x6e4cd4981f598749!2sCSPIT%20(Mech%2FCivil%2FComputer)!5e0!3m2!1sen!2sin!4v1581586874569!5m2!1sen!2sin"
            width="100%"
            height="100%"
            display="initial"
            position="relative"
            className={classes.border0}
            />
        </GridItem>
      </GridContainer>
     </div>
  );
}
