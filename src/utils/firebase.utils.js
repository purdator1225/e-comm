//1. Import needed tools

import { initializeApp } from "firebase/app";

//import some Auth methods
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

//import firestore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//We need to tell that this instance is the one on the firebase console
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0YdbbNQlPqfWIcRTI-Z7PA7AnbXOVg7E",
  authDomain: "crown-db-clothing.firebaseapp.com",
  projectId: "crown-db-clothing",
  storageBucket: "crown-db-clothing.appspot.com",
  messagingSenderId: "88053376313",
  appId: "1:88053376313:web:b1393b3ca79408f530b4e8",
  measurementId: "G-24C49K2C5Z",
};

// 2. Initialize Firebase, this is the instance in the console
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//google auth provider is a class from google itself, hence there is word 'new'

//3. Initialise new provider
const googleProvider = new GoogleAuthProvider();

//ask for account
//4. Set paramaters for provider
googleProvider.setCustomParameters({
  prompt: "select_account",
});

//the method of authentication for communication is the same for the app
//5.
export const auth = getAuth();

//to return signINwithpopup

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

//instantiatate the db ..directly points to database
export const db = getFirestore();

//receives authentication object, the userAuth object may have different values according to which Auth you use, for GoogleAuth you may have a displayName value set but not for email Auth, so set an additional information argument to spread into the setting doc object
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  //need to see if theres a doc reference, which is an instance of a document model

  //WE WANT TO GET THE REF FROM FIRESTORE, there is already a reference that is pointing to the uid

  const userDocRef = doc(db, "users", userAuth.uid);

  //this object allows us to check if the userref exists
  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot);

  //if snapshot exists, set the doc with this object

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //set the document to the docref
      await setDoc(userDocRef, { displayName, email, createdAt,
      //spread the additional objects into the set doc object argument
      ...additionalInformation});
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

//Check if user data exists, if yes, rturn user Document ref
//if user data does not exist, set the docuement with data from userAuth in my collection


//added these utilities as a central location to link the underlying servies 
export const createAuthUserWithEmailandPassword = async (email,password) => {

  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth,email,password)


};


export const signInUserWithEmailandPassword = async (email,password) => {

  if(!email || !password) return;
  
  return await signInWithEmailAndPassword(auth,email,password)


};
