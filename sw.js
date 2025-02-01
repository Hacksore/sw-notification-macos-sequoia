console.log("Service worker loaded!", Date.now());

// handle notfication click event
// BUG: this should fire right?
self.addEventListener("notificationclick", function (event) {
  console.log("Notification click event");
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://google.com")
  );
})
