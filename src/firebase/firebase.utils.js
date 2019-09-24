import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAiLnaw_pbfDYnmI5HaEFaomoVDxuzAfNw",
  authDomain: "e-commerce-db-23c66.firebaseapp.com",
  databaseURL: "https://e-commerce-db-23c66.firebaseio.com",
  projectId: "e-commerce-db-23c66",
  storageBucket: "",
  messagingSenderId: "1072921960625",
  appId: "1:1072921960625:web:81e1840d7e851373658290"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
