// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import React from 'react';
import 'firebase/firestore'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';


const firebaseConfig = {
    apiKey: "AIzaSyCvgv0BV2VhnLuKUiIo61erF0qfwflrnv8",
    authDomain: "netflixclone-d0170.firebaseapp.com",
    projectId: "netflixclone-d0170",
    storageBucket: "netflixclone-d0170.appspot.com",
    messagingSenderId: "954473686702",
    appId: "1:954473686702:web:7ac54a4324651851a86f3f",
    measurementId: "G-GNPT3BTMLK"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export {auth, db};