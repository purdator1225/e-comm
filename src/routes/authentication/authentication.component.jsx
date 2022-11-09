import SignUpForm from "../../components/sign-up-form/sign-up-from.component.jsx";

import SignInForm from "../../components/sign-in/sign-in-form.component.jsx";


import "./authentication.styles.scss";


// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase.utils.js";

const Authentication = () => {
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
  // const logGoogleUser = async () => {
  //   //deconstruct user from the Auth object
  //   const { user } = await signInWithGooglePopup();

  //   //after receive the user object then create the userDoc
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
      <div className="authentication-wrapper">
        <SignInForm />
        <SignUpForm />
      </div>
  );
};

export default Authentication;
