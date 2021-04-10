import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP1NkgZozDRdSnngvRzQR8wXmHJSDmcFw",
    authDomain: "whatsapp-reloaded.firebaseapp.com",
    databaseURL: "https://whatsapp-reloaded-default-rtdb.firebaseio.com",
    projectId: "whatsapp-reloaded",
    storageBucket: "whatsapp-reloaded.appspot.com",
    messagingSenderId: "681514357980",
    appId: "1:681514357980:web:698b9971cf08ffcdee5019",
    measurementId: "G-EP5Q402TRD"
};

const app = !firebase.apps.length ? firebase.initializeApp( firebaseConfig ) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };