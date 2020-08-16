import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import Button from "components/CustomButtons/Button.js";
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/">Home</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/about">About Us</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/events">Events</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/team">Our Team</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} to="/contact">Contact Us</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="rose"
          target="_blank"
          round
          href="joinus.html"
          >
          Become a Member
        </Button>
      </ListItem>
    </List>
  );
}
