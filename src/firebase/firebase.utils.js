import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC-V2DdbBB_zOUvN5tcm8pOng3f4V31QHE",
    authDomain: "crwn-clothing-db-c22f7.firebaseapp.com",
    projectId: "crwn-clothing-db-c22f7",
    storageBucket: "crwn-clothing-db-c22f7.appspot.com",
    messagingSenderId: "632043857868",
    appId: "1:632043857868:web:a0694c5f25f417ade6df69",
    measurementId: "G-8YZB50BHWP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;