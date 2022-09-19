

import firebase from "firebase/app"
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDahNfmioHGzaO3oLdZpYLgPZpgOCILoQA",
    authDomain: "newsletter-aa5a6.firebaseapp.com",
    projectId: "newsletter-aa5a6",
    storageBucket: "newsletter-aa5a6.appspot.com",
    messagingSenderId: "805164959727",
    appId: "1:805164959727:web:1d06d80d0b05dd3461d81a",
    measurementId: "G-LTCQCTRLBV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
export default db;

