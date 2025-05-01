self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(["./", "./main.html", "/style.css", "/sw.js", "/icons/icon-192.png",  "/icons/icon-512.png", "./manifest.json"]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
