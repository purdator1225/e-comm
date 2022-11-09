import { useState } from "react";

import {
  signInUserWithEmailandPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  auth,
} from "../../utils/firebase.utils";



import { UserContext } from "../contexts/user.context";

import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
// New pattern to set states for repeated in the same object

const defaultForm = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);

  const { email, password } = formFields;

  //use the setCurrentUser method from the useContext hook 
  //useContexthook uses a usercontext which has been created 

  // const {setCurrentUser} = useContext(UserContext)

  const resetFromFields = () => {
    setFormFields(defaultForm);
  };

  const signInwithGoogle = async () => {
    //deconstruct user from the Auth object
     await signInWithGooglePopup();

    //after receive the user object then create the userDoc
    // await createUserDocumentFromAuth(user);
  };

  //this runs when i submit the handler

  const handleSubmit = async (event) => {
    //prevent default form actions
    event.preventDefault();

    try {
      const {user} = await signInUserWithEmailandPassword(email, password);

      //use the setCurrentUser method from the useContext hook 

      resetFromFields();
    } catch (error) {

      switch(error.code){
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;
        case 'auth/user-not-found':
          alert ('user not found')
          break;
        default:
          console.log(error);
      }

    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({
      //spread other stuff
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit" onChange={handleChange}>
            Sign In
          </Button>

          <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInwithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
