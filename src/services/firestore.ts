import * as firebase from "firebase/app";
import { useHistory } from "react-router-dom";

import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB43CEGNbVbbbvmMq4VaoK2NuwpCp1OcbI",
  authDomain: "fitly-85a63.firebaseapp.com",
  databaseURL: "https://fitly-85a63.firebaseio.com",
  projectId: "fitly-85a63",
  storageBucket: "fitly-85a63.appspot.com",
  messagingSenderId: "258186707545",
  appId: "1:258186707545:web:6244c2133bfcbde0152748",
  measurementId: "G-5MWY6JZ07C",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
var provider = new firebase.auth.GoogleAuthProvider();

export interface CurrentUser {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

export const loginWithPop = async (): Promise<CurrentUser> => {
  console.log("displayName");
  try {
    await firebase.auth().signInWithPopup(provider);
    const { displayName, email, photoURL } = firebase.auth().currentUser!;

    return { displayName, email, photoURL };
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    console.log("Outtted");
  } catch (error) {
    console.log(error);
    return error;
  }
};
