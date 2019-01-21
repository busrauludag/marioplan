import firebase from 'firebase/app';  // we call app for base firebase features
import 'firebase/firestore'; // this is database
import 'firebase/auth'; // we use this for authentication

 
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAz3LFVvwA2z0dVb4CEYV1HaGqMvlDkNwo",
  authDomain: "marioplan-d5bbc.firebaseapp.com",
  databaseURL: "https://marioplan-d5bbc.firebaseio.com",
  projectId: "marioplan-d5bbc",
  storageBucket: "marioplan-d5bbc.appspot.com",
  messagingSenderId: "213396337965"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
// update the firebase library which changes how firebase works with the time stamps

export default firebase;