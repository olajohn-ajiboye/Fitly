import firebase from "firebase/app";
import "firebase/firestore";
const config = {
  apiKey: process.env.SUPERESCRET_KEY,
  authDomain: "kessing-logger.firebaseapp.com",
  databaseURL: "https://kessing-logger.firebaseio.com",
  projectId: "kessing-logger",
  storageBucket: "kessing-logger.appspot.com",
  messagingSenderId: process.env.messagingSenderId,
};
const firebaseApp = firebase.initializeApp(config);

const firestore = firebaseApp.firestore();

export default firestore;
