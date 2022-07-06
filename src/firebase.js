import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOh3rp0RDV15rfKM0_kI-p8TscDz16ev8",
    authDomain: "movies-fa407.firebaseapp.com",
    projectId: "movies-fa407",
    storageBucket: "movies-fa407.appspot.com",
    messagingSenderId: "520139080992",
    appId: "1:520139080992:web:89241c1dcd2f4978854345",
    measurementId: "G-KKE0F7Q5FJ"
  };
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
