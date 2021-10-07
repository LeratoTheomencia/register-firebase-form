import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


 var firebaseConfig = {
    apiKey: "AIzaSyBN783n-62-EBNo5zZVsFp868v6qGpZK3E",
    authDomain: "fir-register-75540.firebaseapp.com",
    projectId: "fir-register-75540",
    storageBucket: "fir-register-75540.appspot.com",
    messagingSenderId: "366060939426",
    appId: "1:366060939426:web:7925b32ad0ed4a8b88cffb",
    measurementId: "G-M20X49652F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export {firebase}