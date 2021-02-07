import 'firebase/firestore';
import firebase from 'firebase';


// Initialize Firebase
const app = firebase.initializeApp({
    apiKey: "AIzaSyDm-XH9uP9AbIr2xmzRuuBNzGcsRC5TLa0",
    authDomain: "hackatown2021-303922.firebaseapp.com",
    projectId: "hackatown2021-303922",
    storageBucket: "hackatown2021-303922.appspot.com",
    messagingSenderId: "351900671286",
    appId: "1:351900671286:web:ce1b76941fb7f8444aa797",
    measurementId: "G-QVSKCPL49P"
  });
  export const dataBase = app.firestore();
