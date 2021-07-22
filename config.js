import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyDPJs4IxXBbMqN47B9OPG52M4Y2cVgsYJk",
    authDomain: "keep-it-8232b.firebaseapp.com",
    databaseURL: "https://keep-it-8232b-default-rtdb.firebaseio.com",
    projectId: "keep-it-8232b",
    storageBucket: "keep-it-8232b.appspot.com",
    messagingSenderId: "222321955136",
    appId: "1:222321955136:web:d008acf23f34bfd6832aa5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();