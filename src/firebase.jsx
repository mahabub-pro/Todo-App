// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuFpxNGMximgK6mwGRGhgtE1LmHfziyLs",
  authDomain: "todo-app-45c77.firebaseapp.com",
  projectId: "todo-app-45c77",
  storageBucket: "todo-app-45c77.appspot.com",
  messagingSenderId: "2256593872",
  appId: "1:2256593872:web:18975e77a724279b180fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);