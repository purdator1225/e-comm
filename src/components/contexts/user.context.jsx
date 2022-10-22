import {createContext, useState, useEffect} from 'react'


//put onauth state changed here as data is here mostly 
import { createUserDocumentFromAuth, onAuthStateChangedListener,signOutUser} from '../../utils/firebase.utils';

//as the actual value you want to access
export const UserContext  = createContext({

    currentUser: null, 
    setCurrentUser:()=> null, 

})

//provider the actual context component 
export const UserProvider = ({children}) =>{
//use state to hook in user context
    const [currentUser,setCurrentUser] = useState(null);

    const value = {currentUser,setCurrentUser}; 

//runs the callback function whenever auth state changes

//however this runs whenever component unmounts 

    useEffect(()=>{

        const unsubscribe = onAuthStateChangedListener((user)=>{

            if(user){

                createUserDocumentFromAuth(user);

            }
            
            setCurrentUser(user)})

        return unsubscribe; 

    },[])


    return <UserContext.Provider value={value}>{children}
    
    </UserContext.Provider>
}