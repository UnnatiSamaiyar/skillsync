import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv9XIx83AdsaPMgAGtyl9CAoowUkMs3bg",
  authDomain: "aiskillsync-6d1ac.firebaseapp.com",
  projectId: "aiskillsync-6d1ac",
  storageBucket: "aiskillsync-6d1ac.firebasestorage.app",
  messagingSenderId: "722644544283",
  appId: "1:722644544283:web:1bf9818fd669b087b001be",
  measurementId: "G-WJL66QMFW7"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp() ;

export const auth = getAuth(app);
export const db = getFirestore(app)