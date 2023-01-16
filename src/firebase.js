import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5Xo0P0ZQkGN_hRLnTE_uPUVybjwfXZrk",
  authDomain: "linkedin-clone-1a903.firebaseapp.com",
  projectId: "linkedin-clone-1a903",
  storageBucket: "linkedin-clone-1a903.appspot.com",
  messagingSenderId: "879234130510",
  appId: "1:879234130510:web:8128cbaf11335d4ddfd91f",
  measurementId: "G-QGPPBFYZ4E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
