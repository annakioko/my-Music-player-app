import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAZV9UEnTkLJFYrLDFXF1PwMiIaY435LEM",
  authDomain: "music-app-cba31.firebaseapp.com",
  projectId: "music-app-cba31",
  storageBucket: "music-app-cba31.appspot.com",
  messagingSenderId: "582782440304",
  appId: "1:582782440304:web:6a9b0713849c106f6835b5",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);