// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDs-6Vo7l-sUM3WtLq2AjnIozxzdmbthI4",
  authDomain: "noterize-a22fc.firebaseapp.com",
  projectId: "noterize-a22fc",
  storageBucket: "noterize-a22fc.appspot.com",
  messagingSenderId: "98212789823",
  appId: "1:98212789823:web:8100d4c4e2727b2ab9028a",
  measurementId: "G-E149ZK1ZB7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;
