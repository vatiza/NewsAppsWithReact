import  { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  
  const [user,setUser]=useState(null);

  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass)
}
const signIn=(email,pass)=>{
  return signInWithEmailAndPassword(auth,email,pass);
}

useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth,loggedUser=>{
    console.log('logged uer in sign in already in side',loggedUser);
    setUser(loggedUser);
  })
  return ()=>{
    unsubscribe();
  }
},[])
  const authInfo = {
    user,
    createUser,
    signIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
