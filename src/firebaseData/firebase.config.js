// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXmfEx0P_EiswOOP241Lyu-vEzlY1OEm4",
  authDomain: "every-management-assignment-9.firebaseapp.com",
  projectId: "every-management-assignment-9",
  storageBucket: "every-management-assignment-9.appspot.com",
  messagingSenderId: "1008604924912",
  appId: "1:1008604924912:web:cb7130e36be73160f56b35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;