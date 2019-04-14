import firebase from 'firebase/app';
import 'firebase/storage';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDCo6M6SEy7nNs7Izgf0fUxTSZI1vfO-PY",
    authDomain: "tshirt-app.firebaseapp.com",
    databaseURL: "https://tshirt-app.firebaseio.com",
    projectId: "tshirt-app",
    storageBucket: "tshirt-app.appspot.com",
    messagingSenderId: "85088747332"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
        storage, firebase as default
  }