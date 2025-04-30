// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPYXKrro5hmBbTBZzmiOQsLVMd1j--vqE",
  authDomain: "tasklist-36b86.firebaseapp.com",
  projectId: "tasklist-36b86",
  storageBucket: "tasklist-36b86.firebasestorage.app",
  messagingSenderId: "947246465976",
  appId: "1:947246465976:web:e7009f0464cb65ccfec54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app) 