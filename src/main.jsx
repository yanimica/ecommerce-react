import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbTPz1SGs1SLXVUXNPrVkZKHQO5upXCPY",
  authDomain: "ecommercereact-d7584.firebaseapp.com",
  projectId: "ecommercereact-d7584",
  storageBucket: "ecommercereact-d7584.appspot.com",
  messagingSenderId: "1000604448853",
  appId: "1:1000604448853:web:cbfc27566a26c2da98bcdc",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
