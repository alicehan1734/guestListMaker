import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLvUbyLlkTjfghp-2hbhSHcdw2J4QX7hw",
  authDomain: "business-card-maker-22eb5.firebaseapp.com",
  projectId: "business-card-maker-22eb5",
  storageBucket: "business-card-maker-22eb5.appspot.com",
  messagingSenderId: "259848776039",
  appId: "1:259848776039:web:0e07585c0977e56d6667c2",
  measurementId: "G-2KYMGQ1Q5J"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;