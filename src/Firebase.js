import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq9L_BEdodVCHgsXDirAF33ntaNvwJJwk",
  authDomain: "protfoloi.firebaseapp.com",
  projectId: "protfoloi",
  storageBucket: "protfoloi.firebasestorage.app",
  messagingSenderId: "281622428751",
  appId: "1:281622428751:web:2ca0cb8dcbe67f7c803e3a",
  measurementId: "G-448QN11ZMB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };