import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBcSB80hnefgqqeRRLKWAs0di9i71cjL-U",
  authDomain: "sysgi-210bd.firebaseapp.com",
  databaseURL: "https://sysgi-210bd.firebaseio.com",
  projectId: "sysgi-210bd",
  storageBucket: "sysgi-210bd.appspot.com",
  messagingSenderId: "636966878050",
  appId: "1:636966878050:web:09fb8285a0b4c1b9938a3b",
  measurementId: "G-807DSCTC0E"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth;
const db = firebase.database;
const storage = firebase.storage;

export default firebase;
export { auth, db, storage };
