import { container } from "assets/jss/material-kit-react.js";
import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js"
const homeStyle = {
  container,
  ...imagesStyle,
  ...modalStyle,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontFamily:"helvetica,arial,sans-serif",
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontFamily:"roboto slab,times new roman,serif",
    fontSize: "1.5rem",
    maxWidth: "500px",
  }
};

export default homeStyle;
