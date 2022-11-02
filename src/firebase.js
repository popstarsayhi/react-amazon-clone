import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCj21j0pHsRy4ctUZz3mnetxLrwJGZboSY",
    authDomain: "clone-48e94.firebaseapp.com",
    projectId: "clone-48e94",
    storageBucket: "clone-48e94.appspot.com",
    messagingSenderId: "740656784949",
    appId: "1:740656784949:web:35a8feae7dcf2ffc64737c"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };