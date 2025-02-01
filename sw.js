console.log("Service worker loaded");

// handle notfication click event
self.addEventListener("notificationclick", function (event) {
  consooe.log("Notification click event");
  event.notification.close();
  event.waitUntil(
    clients.openWindow("https://google.com")
  );
})
