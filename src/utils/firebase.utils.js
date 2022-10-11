import {initializeApp} from 'firebase/app';

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

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
  measurementId: "G-24C49K2C5Z"
};


// Initialize Firebase, this is the instance in the console
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//google auth provider is a class from google itself, hence there is word 'new'
const provider = new GoogleAuthProvider();

//ask for account 
provider.setCustomParameters({
    prompt: 'select_account'
})

//the method of authentication for communication is the same for the app 
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db= getFirestore();

export const createUserDocumentFromAuth= async(userAuth)=>{
  //need to see if theres a doc reference 
  const userDocRef = doc(db,'users',userAuth.uid);

  //this object allows us to check if the user exists 
  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot)

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef,{displayName,email,createdAt})
    }
    catch(error){
      console.log('error creating user',error.message);
    }
  }

}

//Check if user data exists, if yes, rturn user Document ref 
//if user data does not exist, set the docuement with data from userAuth in my collection 