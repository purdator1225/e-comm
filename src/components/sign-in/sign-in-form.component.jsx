import { useState } from "react";

import {
  signInUserWithEmailandPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';


import "./sign-in-form.styles.jsx";

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
    <SignInContainer>
    <h2>Already have an account?</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
      <FormInput
        label='Email'
        type='email'
        required
        onChange={handleChange}
        name='email'
        value={email}
      />

      <FormInput
        label='Password'
        type='password'
        required
        onChange={handleChange}
        name='password'
        value={password}
      />
      <ButtonsContainer>
        <Button type='submit'>Sign In</Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.google}
          type='button'
          onClick={signInwithGoogle}
        >
          Sign In With Google
        </Button>
      </ButtonsContainer>
    </form>
  </SignInContainer>
  );
};

export default SignInForm;
