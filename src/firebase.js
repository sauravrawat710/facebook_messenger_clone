import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB474hyBKpX5HvjrmQ-0pFOjAB-IdKXc9s",
  authDomain: "facebook-messenger-clone-fbc33.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-fbc33.firebaseio.com",
  projectId: "facebook-messenger-clone-fbc33",
  storageBucket: "facebook-messenger-clone-fbc33.appspot.com",
  messagingSenderId: "394893068673",
  appId: "1:394893068673:web:08cf4ab428092e09a58080",
  measurementId: "G-W4Z0N1H495",
});

const db = firebaseApp.firestore();

export default db;