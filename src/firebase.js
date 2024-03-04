import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcvpXwkqDz-MrVIGnmfSs_2fUJ8Q78l1s",
  authDomain: "netflix-clone-a8780.firebaseapp.com",
  projectId: "netflix-clone-a8780",
  storageBucket: "netflix-clone-a8780.appspot.com",
  messagingSenderId: "478250176216",
  appId: "1:478250176216:web:ebe2994cfba825b51b51ad",
  measurementId: "G-NB6Q6Z27LF"
};
// function logIn (email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

