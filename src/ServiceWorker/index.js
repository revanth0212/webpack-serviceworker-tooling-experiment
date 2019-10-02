import { cowsString } from "./consts";

self.addEventListener("install", function(event) {
  // Skip the 'waiting' lifecycle phase, to go directly from 'installed' to 'activated', even if
  // there are still previous incarnations of this service worker registration active.
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  // Claim any clients immediately, so that the page will be under SW control without reloading.
  event.waitUntil(self.clients.claim());
});

const makeServiceCows = async () => {
  let numCows = 5;
  let serviceCows = "";
  while (numCows--) {
    serviceCows += cowsString;
  }
  return new Response(serviceCows);
};

self.addEventListener("fetch", async event => {
  if (event.request.url.match(/cows/)) {
    return event.respondWith(makeServiceCows());
  }
});
