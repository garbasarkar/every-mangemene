import { createContext, useEffect, useState } from "react";
import auth from "../firebaseData/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const userCreate = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const userFixed = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state chance!", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      userFixed();
    };
  }, []);

  const authInfo = { user, loading, userCreate, userLogin, logOut , googleSignIn };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
