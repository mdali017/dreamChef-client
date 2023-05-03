// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhYePF1j0IlsN8ZfF04fZAz11KP9EkgYo",
  authDomain: "chef-recipe-hunter-3e59d.firebaseapp.com",
  projectId: "chef-recipe-hunter-3e59d",
  storageBucket: "chef-recipe-hunter-3e59d.appspot.com",
  messagingSenderId: "822016092144",
  appId: "1:822016092144:web:dbf18a9aa0415db7d31f35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;