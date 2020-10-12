import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import clogo from "assets/img/charusat-logo.png"

const useStyles = makeStyles(styles);
export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.containerFluid}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                  href="https://twitter.com/asc_charusat"
                  className={classes.block}
                  target="_blank"
                  rel="noopener noreferrer"
                ><i className={classes.socialIcons + " fab fa-twitter"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                  href="https://www.instagram.com/asc.charusat/"
                  className={classes.block}
                  target="_blank"
                  rel="noopener noreferrer"
                ><i className={classes.socialIcons + " fab fa-instagram"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                  href="https://github.com/asc-charusat"
                  className={classes.block}
                  target="_blank"
                  rel="noopener noreferrer"
                ><i className={classes.socialIcons + " fa fa-github"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                  href="https://medium.com/asc-charusat"
                  className={classes.block}
                  target="_blank"
                  rel="noopener noreferrer"
                ><i className={classes.socialIcons + " fab fa-medium"}/>
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                  href="mailto:asc.club@charusat.edu.in"
                  className={classes.block}
                  target="_blank"
                  rel="noopener noreferrer"
                ><i className={classes.socialIcons + " fa fa-envelope-o"} />
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          <a target="_blank" rel="noopener noreferrer" href="https://charusat.ac.in/"><img src={clogo} alt="CHARUSAT LOGO" style={{maxHeight:"40px"}}/></a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
