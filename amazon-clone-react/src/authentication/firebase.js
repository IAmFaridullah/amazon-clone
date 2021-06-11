import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCT6C-LQaPsKClr4HhQ6GXf23SpHYo4bck",
    authDomain: "clone-1e264.firebaseapp.com",
    projectId: "clone-1e264",
    storageBucket: "clone-1e264.appspot.com",
    messagingSenderId: "858443295276",
    appId: "1:858443295276:web:1bdcc71dcf51fac0917f89",
    measurementId: "G-BLSMQQMRMK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebaseApp.firestore();