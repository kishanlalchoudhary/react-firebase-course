// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJMqLZQiEtq9hudIFetS7hc7a9wOzHYjo",
  authDomain: "fir-course-e2e99.firebaseapp.com",
  projectId: "fir-course-e2e99",
  storageBucket: "fir-course-e2e99.appspot.com",
  messagingSenderId: "909566466860",
  appId: "1:909566466860:web:d728c11e75a5070eda2a89",
  measurementId: "G-JNN81RFT66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const goggleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);