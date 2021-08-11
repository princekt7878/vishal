import * as firebase from "firebase";
import "firebase/auth";

var app;

if (firebase.apps.length) {
    app = firebase.app()
}
else {
    app = firebase.initializeApp({
        apiKey: "AIzaSyAuebL4Yby8_33uEqR4SBTfvs8iTHZISro",
        authDomain: "start-of-stories-1f876.firebaseapp.com",
        projectId: "start-of-stories-1f876",
        storageBucket: "start-of-stories-1f876.appspot.com",
        messagingSenderId: "662223704012",
        appId: "1:662223704012:web:f142bf6678515ef2705769"
    });

}
export default app;