import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "voxora-40bdc.firebaseapp.com",
  projectId: "voxora-40bdc",
  storageBucket: "voxora-40bdc.firebasestorage.app",
  messagingSenderId: "527891865539",
  appId: "1:527891865539:web:20c0da82495d315c3a6776"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}