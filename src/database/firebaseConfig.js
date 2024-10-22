import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLyzZZz2eS7g-5dJLnE638ur1zR1f9p5o",
  authDomain: "content-stack-authentication.firebaseapp.com",
  projectId: "content-stack-authentication",
  storageBucket: "content-stack-authentication.appspot.com",
  messagingSenderId: "78582528924",
  appId: "1:78582528924:web:f0f949e05fe65610f26659",
  measurementId: "G-FPEG5SBJN3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Google sign-in function
export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

// Email sign-in function
export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Email signup function
export const signupWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
