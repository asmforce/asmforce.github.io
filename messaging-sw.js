importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({messagingSenderId: 'blockwrk-9da2b'});

firebase.messaging().setBackgroundMessageHandler((payload) => {
  console.log('Message received. ', payload);
});
