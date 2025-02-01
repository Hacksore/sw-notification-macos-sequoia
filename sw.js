self.addEventListener("installed", function(event) {
  console.log("Service worker install!", Date.now());
})

self.addEventListener("activate", function(event) {
  console.log("Service worker activate!", Date.now());
})

self.addEventListener("message", function(event) {
  console.log("Message from main page:", event.data);
  self.registration.showNotification("Hello from the service worker!")
})

self.addEventListener("notificationclick", function(event) {
  console.log("Notification click event");
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://google.com")
  );
})
