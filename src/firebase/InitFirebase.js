import * as firebase from 'firebase/app';
import "firebase/database";

const initFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyACiAX0lGsrcAIg6kkhx5HgermI9UfODB0",
    authDomain: "dream-catcher-5175f.firebaseapp.com",
    databaseURL: "https://dream-catcher-5175f.firebaseio.com",
    projectId: "dream-catcher-5175f",
    storageBucket: "dream-catcher-5175f.appspot.com",
    messagingSenderId: "547092580348",
    appId: "1:547092580348:web:0ffa72d1b6b8303f265479"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
  export default initFirebase;
