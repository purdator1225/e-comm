import { useState } from "react";

import {
  createAuthUserWithEmailandPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import './sign-up-form.styles.jsx'

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

// New pattern to set states for repeated in the same object

const defaultForm = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultForm);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFromFields = () => {
    setFormFields(defaultForm);
  };

  //this runs when i submit the handler

  const handleSubmit = async (event) => {
    //prevent default form actions
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailandPassword(
        email,
        password
      );


      await createUserDocumentFromAuth(user, { displayName });

      resetFromFields();

      alert(`user ${displayName} successfully created!`);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error", error);
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
        <h2>Dont have an account?</h2> 

      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit"  onChange={handleChange}>
            Sign In
        </Button>
        
    
      </form>
    </div>
  );
};

export default SignUpForm;
