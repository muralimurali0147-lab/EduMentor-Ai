import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// Firebase Config (YOUR GIVEN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyBNyoThRVlvJEkSpznc9KfC44iR662dLN0",
  authDomain: "edumentorai-47856.firebaseapp.com",
  projectId: "edumentorai-47856",
  storageBucket: "edumentorai-47856.appspot.com",
  messagingSenderId: "12031596045",
  appId: "1:12031596045:web:f4ff3eea5e699363f2a744",
  measurementId: "G-321DVL8H0D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics (optional)
getAnalytics(app);

// Firestore DB
const db = getFirestore(app);

export { db };