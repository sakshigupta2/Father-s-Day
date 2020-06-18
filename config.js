import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB5FVAWI2XG0qWsmJ-fUq-tdiJFMcU-rUw",
  authDomain: "life-experience-4027a.firebaseapp.com",
  databaseURL: "https://life-experience-4027a.firebaseio.com",
  projectId: "life-experience-4027a",
  storageBucket: "life-experience-4027a.appspot.com",
  messagingSenderId: "794588208944",
  appId: "1:794588208944:web:fbe21f7218a598317a32f5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
