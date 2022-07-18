// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUfnzQA-DHWwXm2u2dLOZHlfq1SZyc7K8",
    authDomain: "asencio-ecommerce.firebaseapp.com",
    projectId: "asencio-ecommerce",
    storageBucket: "asencio-ecommerce.appspot.com",
    messagingSenderId: "603814914171",
    appId: "1:603814914171:web:6b30735f31e71139ae9ade",
    measurementId: "G-WNVBGZQ924"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };