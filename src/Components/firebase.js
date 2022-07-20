import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDz1GXZ3-LI4Jx30a4piLJ1K666C1GLwqA",
  authDomain: "darenight-446fa.firebaseapp.com",
  projectId: "darenight-446fa",
  storageBucket: "darenight-446fa.appspot.com",
  messagingSenderId: "100136048859",
  appId: "1:100136048859:web:bd34ddde531a8185cb14fe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = getAuth(firebaseApp)

export  {db,auth}