import { useState } from "react";

import {
  signInUserWithEmailandPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  auth,
} from "../../utils/firebase.utils";

import "./sign-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";
// New pattern to set states for repeated in the same object

const defaultForm = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);

  const { email, password } = formFields;

  const resetFromFields = () => {
    setFormFields(defaultForm);
  };

  const signInwithGoogle = async () => {
    //deconstruct user from the Auth object
    const { user } = await signInWithGooglePopup();

    //after receive the user object then create the userDoc
    await createUserDocumentFromAuth(user);
  };

  //this runs when i submit the handler

  const handleSubmit = async (event) => {
    //prevent default form actions
    event.preventDefault();

    try {
      const response = await signInUserWithEmailandPassword(email, password);

      console.log(response);

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
    console.log(formFields);
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
          <Button buttonType="" type="submit" onChange={handleChange}>
            Sign In
          </Button>

          <Button buttonType="google" type='button' onClick={signInwithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
