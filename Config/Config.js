import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDejukGZCrexy6Oj_6B3uywRD5HzsKn8h4",
  authDomain: "commercenextapp-ad629.firebaseapp.com",
  projectId: "commercenextapp-ad629",
  storageBucket: "commercenextapp-ad629.appspot.com",
  messagingSenderId: "62843584535",
  appId: "1:62843584535:web:45098f43e6e4ae3c3d5c52",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
