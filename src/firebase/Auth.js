import initFirebase from './initFirebase.';
import Methods from './Methods';
import firebase from "firebase/app";

function setUp() {

    initFirebase();
    firebase.firestore();
    Methods.getUser(function(user){

        if (user) {
            // User is signed in.
            window.user = user;
            const name = user.displayName;
            const email_user = user.email;
            const emailVerified = user.emailVerified;
            const photoURL = user.photoURL;
            const uid = user.uid;
        }
    })
}
export default setUp;