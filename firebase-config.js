// Import and configure Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.x.x/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.x.x/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDlXcSDDn1PHkaw0CdqHBdiv8sjgpzFK0M",
    authDomain: "second-web-ced50.firebaseapp.com",
    projectId: "second-web-ced50",
    storageBucket: "second-web-ced50.firebasestorage.app",
    messagingSenderId: "1014964404581",
    appId: "1:1014964404581:web:7fcdef139702505099a18c",
    measurementId: "G-4BM1P55WNC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
