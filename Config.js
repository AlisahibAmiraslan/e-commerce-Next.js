import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjbAu3Wgj8eua0aE0DlpfJcqHO0t6wnuM",
  authDomain: "commerce-c12aa.firebaseapp.com",
  projectId: "commerce-c12aa",
  storageBucket: "commerce-c12aa.appspot.com",
  messagingSenderId: "710151872391",
  appId: "1:710151872391:web:626a964fa5bc26bcac3d22",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
