
import firebase from 'firebase';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2xrpQ7ngAfVVRheDf6GZgIX4C4nAyDpM",
  authDomain: "kerjakuy-107e2.firebaseapp.com",
  projectId: "kerjakuy-107e2",
  storageBucket: "kerjakuy-107e2.appspot.com",
  messagingSenderId: "182299046369",
  appId: "1:182299046369:web:ca272070aa3d109785e2a0",
  measurementId: "G-ER3RJRS9GN"
};

// Initialize Firebase
const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();


