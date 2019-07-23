importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDd7CliZSWJZcPhZxv-TuI4R32AOVEKK6c",
  authDomain: "blockwrk-9da2b.firebaseapp.com",
  databaseURL: "https://blockwrk-9da2b.firebaseio.com",
  projectId: "blockwrk-9da2b",
  storageBucket: "",
  messagingSenderId: "914157587718",
  appId: "1:914157587718:web:d2e56141da1ff302"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  console.log('Background message received. ', payload);
});
