
import './button.styles.scss'
/*
default 
inverted 
google sign in 

*/

//create an object of button types 

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

//pass in button types as a prop 

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
//render the classname according to the buttontype 
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
