import {
  BaseButton,
  GoogleSignInButton,
  invertedButton,
} from './button.styles.jsx';

//create an object of button types

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

//new get Buttoncomponent that returns the correct type of button

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    //render the styled component based on what the button type is
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: invertedButton,
  }[buttonType]);

//pass in button types as a prop

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
  //render the classname according to the buttontype
};

export default Button;
