self.addEventListener("installed", function(event) {
  console.log("Service worker installed!", Date.now());
})

self.addEventListener("activate", function(event) {
  console.log("Service worker activated!", Date.now());
})

self.addEventListener("message", function(event) {
  console.log("service worker:", event.data);
  self.registration.showNotification(event.data.title)
})

self.addEventListener("notificationclick", function(event) {
  console.log("Notification click event");
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://google.com")
  );
})
