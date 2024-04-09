// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Hmjx-GDLEYiQUZrnqbeBh2h_jvcufCg",
  authDomain: "assignment-9-dd8f2.firebaseapp.com",
  projectId: "assignment-9-dd8f2",
  storageBucket: "assignment-9-dd8f2.appspot.com",
  messagingSenderId: "81347960604",
  appId: "1:81347960604:web:7f79e369aacf742195a4d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
