import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

import firebaseConfig from './apiKeys'

// init firebase app
firebase.initializeApp(firebaseConfig);

export const authRef = firebase.auth()
export const firestoreRef = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;