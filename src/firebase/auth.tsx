
import { initializeApp } from "firebase/app";
import{ getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAzgrRaPUGVik3Ml20OMg0tWVc7mTIKF9U",
  authDomain: "login-f6a41.firebaseapp.com",
  projectId: "login-f6a41",
  storageBucket: "login-f6a41.appspot.com",
  messagingSenderId: "174837435056",
  appId: "1:174837435056:web:e6a52bb70744ef40afc975"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth,provider};