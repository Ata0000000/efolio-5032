import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore"
// Firebase 配置
const firebaseConfig = {
  apiKey: "AIzaSyA0FyI57n_am2zPALeXZaGCGRcepSuk1zY",
  authDomain: "week7-wentao.firebaseapp.com",
  projectId: "week7-wentao",
  storageBucket: "week7-wentao.appspot.com",
  messagingSenderId: "10886938613",
  appId: "1:10886938613:web:82a48f555421e11448aabc",
  measurementId: "G-4RFPJEK2QK"
};


// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export default db;

