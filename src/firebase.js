import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAv1OG93UEbFHjR7j4tipoaLokLxXp7iE4",
    authDomain: "the-car-doctor-2eff5.firebaseapp.com",
    projectId: "the-car-doctor-2eff5",
    storageBucket: "the-car-doctor-2eff5.appspot.com",
    messagingSenderId: "740312643647",
    appId: "1:740312643647:web:67c4c33b9b3782feab208a"
});

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;