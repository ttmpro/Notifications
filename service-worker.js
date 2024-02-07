self.addEventListener('install', function(event) {
    console.log('Service worker installed.');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
    console.log('Service worker activated.');
    event.waitUntil(self.clients.claim());
});

self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'path/to/icon.png',
        badge: 'path/to/badge.png'
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});
