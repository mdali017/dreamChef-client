import React, {createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();
    // const user = {displayName: 'Muri Khan'}

    // observe auth state change
    useEffect( () => {
        const unsubscribed =  onAuthStateChanged(auth, createUser => {
             setUser(createUser);
             console.log('current user', createUser, 15)
             setLoading(false);
         })
         return () =>{
             return unsubscribed();
         }
     }, [])

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User SignOut
    const logOut = () => {
        return signOut(auth);
    } 

    const authInfo = {
          user,
          loading, 
          createUser,
          signIn,
          logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;