const CACHE_NAME = "figcraft-pwa-__BUILD_VERSION__";
const ASSETS = __PRECACHE_ASSETS__;
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("figcraft-pwa-") && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const u = new URL(e.request.url);
  if (u.origin !== self.location.origin) return;
  // Cache only packaged application assets, never documents, remote URLs, or user query parameters.
  if (u.search || !(ASSETS.includes("./" + u.pathname.split("/").pop()) || u.pathname.endsWith("/"))) return;
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request)));
});
