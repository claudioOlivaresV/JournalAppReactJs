// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1PxTXISFgPSW_tNnoCLJ7tm0fgsP1Y6Q",
  authDomain: "reactcursos-44e34.firebaseapp.com",
  projectId: "reactcursos-44e34",
  storageBucket: "reactcursos-44e34.firebasestorage.app",
  messagingSenderId: "158876203627",
  appId: "1:158876203627:web:1021e19e478f5206f60f2e",
  measurementId: "G-WVKR8Y5GKS"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)