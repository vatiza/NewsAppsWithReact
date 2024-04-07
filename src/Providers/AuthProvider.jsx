import  { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const user =null;

  const createUser = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass)
}
const signIn=(email,pass)=>{
  return signInWithEmailAndPassword(auth,email,pass);
}
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
