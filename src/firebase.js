import firebase from 'firebase';
import 'firebase/storage'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBa3VwQsYzX9JLetVlB7y_6COmnnw71Orc",
    authDomain: "personal-b3ae0.firebaseapp.com",
    databaseURL: "https://personal-b3ae0.firebaseio.com",
    projectId: "personal-b3ae0",
    storageBucket: "personal-b3ae0.appspot.com",
    messagingSenderId: "872534698593",
    appId: "1:872534698593:web:3d5d627cae266671a75820"
  };
  // Initialize Firebase
 export const fireStorage = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export const auth = firebase.auth();
  export const provider = new firebase.auth.GoogleAuthProvider();
 

export default db;