import React from "react";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/AboutUsSections/carouselStyle.js";

import image1 from "assets/img/about/image1.jpeg";
import image2 from "assets/img/about/image2.jpeg";
import image3 from "assets/img/about/image3.jpeg";
import image4 from "assets/img/about/image4.jpeg";
import image5 from "assets/img/about/image5.jpeg";
import image6 from "assets/img/about/image6.jpeg";


const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section}>
      <div className={classes.containerFluid}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="Image1" className="slick-image" />
                </div>
                <div>
                  <img src={image2} alt="Image2" className="slick-image" />
                </div>
                <div>
                  <img src={image3} alt="Image3" className="slick-image" />
                </div>
                <div>
                  <img src={image4} alt="Image4" className="slick-image" />
                </div>
                <div>
                  <img src={image5} alt="Image5" className="slick-image" />
                </div>
                <div>
                  <img src={image6} alt="Image6" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
