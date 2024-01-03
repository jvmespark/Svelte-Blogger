import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "Firebase/auth";
import { collection, doc, getFirestore } from "Firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAT_YKGSsKJ-TVi4EnCu5nHKC87RRXWU88",
  authDomain: "svelte-blogger.firebaseapp.com",
  projectId: "svelte-blogger",
  storageBucket: "svelte-blogger.appspot.com",
  messagingSenderId: "423420412687",
  appId: "1:423420412687:web:529bcf7ecbf80d9400b47a",
  measurementId: "G-5Z2MX63QQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let db = getFirestore(app);
const provider = new GoogleAuthProvider();

// comment section functionality
const commentCollection = collection(db, "comments");
export {
    auth,
    provider,
    commentCollection
}