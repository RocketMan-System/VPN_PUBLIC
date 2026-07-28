
console.log("%cBuild date: 7/28/2026, 4:14:00 AM", "color: #4CAF50; font-weight: bold;");
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

const sw = self;
sw.addEventListener("push", (event) => {
  if (!event.data) return;
  try {
    const data = event.data.json();
    const title = data.title || "Notification";
    const options = {
      body: data.body || "",
      icon: data.icon || "/logo.png",
      // Fallback to site logo
      badge: data.badge || "/logo.png",
      data: data.url || "/"
    };
    event.waitUntil(
      sw.registration.showNotification(title, options)
    );
  } catch (e) {
    console.error("Push event handler failed to parse data", e);
  }
});
sw.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const urlToOpen = new URL(event.notification.data || "/", sw.location.origin).href;
  event.waitUntil(
    sw.clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      let matchingClient = null;
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        if (windowClient.url === urlToOpen) {
          matchingClient = windowClient;
          break;
        }
      }
      if (matchingClient) {
        return matchingClient.focus();
      } else {
        return sw.clients.openWindow(urlToOpen);
      }
    })
  );
});

/******/ })()
;
