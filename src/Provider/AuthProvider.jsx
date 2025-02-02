import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const googleProvider=new GoogleAuthProvider()
  
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    })
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
    })
    return ()=>unsubscribe();
  },[])
  const logOut=()=>{
    return signOut(auth)
  }
  const googleSignIn=()=>{
    return signInWithPopup(auth,googleProvider)
  }
  const authInfo={
    user,
    setUser,
    loading,setLoading,
    createUser,
    signIn,
    updateUserProfile,
    logOut,
    googleSignIn
  }
  
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
