import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyACjdTSILpRAA5UhoSlIcsKxBxwcW1dqYo",
  authDomain: "yatla-2f871.firebaseapp.com",
  databaseURL: "https://yatla-2f871.firebaseio.com",
  projectId: "yatla-2f871",
  storageBucket: "yatla-2f871.appspot.com",
  messagingSenderId: "221092265461",
  appId: "1:221092265461:web:d80e19abce0b14ee"
});

export { firebaseConfig as firebase };
