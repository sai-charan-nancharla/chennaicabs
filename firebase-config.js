import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  // Paste your Firebase configuration object here
  apiKey: "AIzaSyBU_adp-RmKNI-bCBYiTaGwJsmcXVO-EGA",
  authDomain: "c-cabs-12.firebaseapp.com",
  databaseURL: "https://c-cabs-12-default-rtdb.firebaseio.com",
  projectId: "c-cabs-12",
  storageBucket: "c-cabs-12.appspot.com",
  messagingSenderId: "993855047310",
  appId: "1:993855047310:web:2a0bdd15a36d80b6a02bdf",
  measurementId: "G-48M0Q2BVNP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
