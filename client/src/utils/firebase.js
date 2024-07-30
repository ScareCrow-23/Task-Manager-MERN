// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "mern-task-manager-9cf44.firebaseapp.com",
  projectId: "mern-task-manager-9cf44",
  storageBucket: "mern-task-manager-9cf44.appspot.com",
  messagingSenderId: "159416964160",
  appId: "1:159416964160:web:88be2db7b64b75df5e7ba5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
