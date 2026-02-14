/* ===============================
   EDEN CV-1 SERVICE WORKER
================================ */

/* INSTALL */
self.addEventListener('install', event => {
    self.skipWaiting();
});

/* ACTIVATE */
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

/* FETCH (Network-first basic handler) */
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response("Offline", {
                headers: { "Content-Type": "text/plain" }
            });
        })
    );
});
