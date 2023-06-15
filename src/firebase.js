
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDU6KCIp8S50vEWGif6RSUCBs-1adzxpkQ",
  authDomain: "quick-chat-6930a.firebaseapp.com",
  projectId: "quick-chat-6930a",
  storageBucket: "quick-chat-6930a.appspot.com",
  messagingSenderId: "627697181096",
  appId: "1:627697181096:web:9f664b6401c7a7bcbdbd9d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export const storage = getStorage();
export const db = getFirestore()