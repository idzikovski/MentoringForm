// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKzeOXwpRAHz-7vJsAN75o75W5UBy9SP4",
    authDomain: "mentorship-form.firebaseapp.com",
    projectId: "mentorship-form",
    storageBucket: "mentorship-form.appspot.com",
    messagingSenderId: "742569403966",
    appId: "1:742569403966:web:821ceb167c47db896d136f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();