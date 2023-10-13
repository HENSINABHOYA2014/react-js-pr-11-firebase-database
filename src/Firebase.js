// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_enKn-VrlmsvcvDf2i0t7e3RiRRk_7dI",
  authDomain: "react-js-39542.firebaseapp.com",
  projectId: "react-js-39542",
  storageBucket: "react-js-39542.appspot.com",
  messagingSenderId: "36210338392",
  appId: "1:36210338392:web:35406fd25be6bb435a782d",
  measurementId: "G-DMHBDKJSTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);