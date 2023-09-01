// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import  {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMfYcG9dmjzjIm53B54DrPUJ36qZNYyB8",
  authDomain: "first-project-6a689.firebaseapp.com",
  projectId: "first-project-6a689",
  storageBucket: "first-project-6a689.appspot.com",
  messagingSenderId: "386716598716",
  appId: "1:386716598716:web:b2c5dbfe7fd46cd92e2bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider =new GoogleAuthProvider();

export const db = getFirestore(app);