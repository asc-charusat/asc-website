import React,{useState,useEffect} from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// import Modal from "components/Modal/Modal.js"
import ReactModal from 'react-modal';
import CustomButton from "components/CustomButtons/Button"


import styles from "assets/jss/material-kit-react/views/home";
import logo from "assets/img/favicon.png";
import aws from "assets/img/aws-member.png";
// import shapai from "assets/img/events/january-shapai.jpeg"
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex                : 1101,
    position: "absolute",
    display:"inline",
    width:"40%",
    minHeight: "300px",
    minWidth: "300px"
  }
};
ReactModal.setAppElement('#root')

const Modal = ()=>{
  const [modalIsOpen,setIsOpen] = React.useState(true);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  useEffect(()=>{
    openModal()
  },[])
 
    return (
      <div>
        <p>loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem</p>
        <button onClick={openModal}>Open Modal</button>
        <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          // onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        
          {/* <img src={shapai} style={{width:"100%", zIndex:9}} className={classes.imgRaised} onClick={()=>{}}></img> */}
        <div style={{marginRight:"-1px"}}></div>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFoH8HuMofvjzbSnlYiOyyEXMmNydv4HstPTAJd-1L-9X8GA/viewform">
        <CustomButton className={classes.button} fullWidth="true" color="primary">Register here</CustomButton>
        </a>
        {/* </div> */}
        </ReactModal>
      </div>
    );
};

  return (
    <div>
      <Header
        brand="ASC - CHARUSAT"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest} />
      <Parallax image={require("assets/img/home-bg.jpg")}>
      {/* <Modal imag={shapai}>
      </Modal> */}
        <div className={classes.container}>
          <GridContainer justify="center" alignItems="center">
            <GridItem xs={4} sm={4} md={2} >
              <img src={logo} alt="ASC-CHARUSAT" className={imageClasses}/>
            </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <div className={classes.brand}>
                <h1 className={classes.title}>AWS Students' Club</h1>
                <h3 className={classes.subtitle}>
                  Seed Cloud, Get Rain On Demand
                </h3>
                <br /> 
                <img src={aws} height="70"/>
              </div>
            </GridItem>
          </GridContainer>
          
        </div>
      </Parallax>
      
      <Footer />
    </div>
  );
}
