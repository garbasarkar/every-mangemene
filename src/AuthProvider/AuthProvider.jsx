import { createContext, useEffect, useState } from "react";
import auth from "../firebaseData/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const userFixed = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state chance!", currentUser);
      setUser(currentUser);
    });
    return () => {
      userFixed();
    };
  }, []);


  const authInfo = { user, userCreate, userLogin, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
