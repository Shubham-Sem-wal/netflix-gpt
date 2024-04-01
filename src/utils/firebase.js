// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQipEcrMTgVe7NBrCzaSIYtjRckNHTuvs",
  authDomain: "netflixgpt-d993a.firebaseapp.com",
  projectId: "netflixgpt-d993a",
  storageBucket: "netflixgpt-d993a.appspot.com",
  messagingSenderId: "312874199308",
  appId: "1:312874199308:web:c092fb8609af82ba604129",
  measurementId: "G-N5NFENTB0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();