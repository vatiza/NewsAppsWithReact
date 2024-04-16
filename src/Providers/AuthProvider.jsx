import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loader,setLoader]=useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, pass) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const signIn = (email, pass) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, pass);
  };
const logOut=()=>{
  setLoader(true)
  return signOut(auth);

}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
   
      setUser(loggedUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loader,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
