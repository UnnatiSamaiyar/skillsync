// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqS2uVNDo6bmH2DIFxpf3sZ8L0eMHX-V8",
  authDomain: "skillsync-2901e.firebaseapp.com",
  projectId: "skillsync-2901e",
  storageBucket: "skillsync-2901e.firebasestorage.app",
  messagingSenderId: "167535319129",
  appId: "1:167535319129:web:7327cf8652b393bfd9f948",
  measurementId: "G-40TZ5M6DD6"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)