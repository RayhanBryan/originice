// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVf3I_n8gG2MTbedP3jvZsDyDYWGPYtwg",
  authDomain: "originice-hrs.firebaseapp.com",
  databaseURL: "https://originice-hrs-default-rtdb.firebaseio.com",
  projectId: "originice-hrs",
  storageBucket: "originice-hrs.appspot.com",
  messagingSenderId: "282419506280",
  appId: "1:282419506280:web:1339c5051602b702de5fdd",
  measurementId: "G-5QQFBXM75J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);