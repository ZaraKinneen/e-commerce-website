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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
