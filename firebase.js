// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmjXjxEAVZnoh7nGAFzKVL03ykXZPFKYY",
  authDomain: "login-firebase-ef7d5.firebaseapp.com",
  projectId: "login-firebase-ef7d5",
  storageBucket: "login-firebase-ef7d5.appspot.com",
  messagingSenderId: "221030999728",
  appId: "1:221030999728:web:aeafbedec6656893adfd75"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth };