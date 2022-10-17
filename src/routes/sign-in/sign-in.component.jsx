import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-from.component.jsx";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils.js";

const SignIn = () => {

    // useEffect(()=>{

    //   const getResult = async () =>{

    //   //auth is some authentication memory 
    //   const response= await getRedirectResult(auth);

    //   if (response){
    //     const userDocRef = await createUserDocumentFromAuth(response.user)
    //   }

    // }

    // getResult()
    // .catch(console.error);

    // },[])


  //will receive a access token from the user object, we can pass the object to create user document in db 
  const logGoogleUser = async () => {

  //deconstruct user from the Auth object 
    const { user } = await signInWithGooglePopup();

//after receive the user object then create the userDoc 
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn</h1>
      <SignUpForm/>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
}

export default SignIn;
