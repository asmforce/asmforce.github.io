firebase.initializeApp({messagingSenderId: 'blockwrk-9da2b'});

const messaging = firebase.messaging();

messaging.getToken().then((newToken) => {
  console.log('New token: ', newToken);
});

messaging.onTokenRefresh(() => {
  messaging.getToken().then((newToken) => {
    console.log('New token: ', newToken);
  });
});
