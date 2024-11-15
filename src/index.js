// src/index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './App.css';  // Correct path to App.css
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Register the service worker for PWA
serviceWorkerRegistration.register();