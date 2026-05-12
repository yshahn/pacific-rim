// Firebase Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey:            'AIzaSyChIQ0Z1sM68J6OtgIW82EyWuzys9Oz6tg',
  authDomain:        'pacific-rim-bistro.firebaseapp.com',
  projectId:         'pacific-rim-bistro',
  storageBucket:     'pacific-rim-bistro.firebasestorage.app',
  messagingSenderId: '855085279043',
  appId:             '1:855085279043:web:7e0b1db10cedf7e50b71f6',
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(payload => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'Pacific Rim Bistro', {
    body: body || '',
    icon: icon || '/icons/icon-192.png',
    badge: '/icons/icon-192.png',
    data: payload.data || {},
  });
});

// Handle notification click
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
      if (clientList.length > 0) return clientList[0].focus();
      return clients.openWindow('/');
    })
  );
});
