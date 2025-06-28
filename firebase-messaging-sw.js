importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAbDaEt1ACIRNyC4QerqZQhTO8VJuNoWfE",
  authDomain: "marketplace-378f6.firebaseapp.com",
  projectId: "marketplace-378f6",
  messagingSenderId: "519512596002",
  appId: "1:519512596002:web:b4cd5978ffa111ef55b47b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
   icon: 'ekd-logo.png' 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
