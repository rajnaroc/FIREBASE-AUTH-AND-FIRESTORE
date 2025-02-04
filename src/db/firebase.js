import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_API_AUTHDOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_API_PROYECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_API_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_API_APPID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
const db = getFirestore(app)
export { auth, db }