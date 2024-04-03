// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCAdQIFmepSt__jURoL_h8DL7CZadPnEmI",
  authDomain: "projectbluejay-c8181.firebaseapp.com",
  projectId: "projectbluejay-c8181",
  storageBucket: "projectbluejay-c8181.appspot.com",
  messagingSenderId: "60264830649",
  appId: "1:60264830649:web:fea9afb092420b3d6b2d68",
  measurementId: "G-6MF0QMEE91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const imageDb = getStorage(app)