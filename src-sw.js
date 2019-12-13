workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
  /https:\/\/jsonplaceholder\.typicode\.com\/users/,
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 6
  })
);
