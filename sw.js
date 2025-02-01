console.log("Service worker loaded!", Date.now());

// handle message 
self.addEventListener("message", function (event) {
  console.log("Message event", event.data);
})

// BUG: this should fire right?
self.addEventListener("notificationclick", function (event) {
  console.log("Notification click event");
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://google.com")
  );
})
