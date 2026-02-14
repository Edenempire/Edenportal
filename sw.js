const CACHE_NAME = 'eden-cv1-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/logo.png',
  '/logo.png',
  '/style.css',  // if any external CSS
  '/script.js',  // if you separate JS
  '/images/hoss.png',
  '/images/joy.jpg',
  '/images/frost.jpg',
  '/images/xan.jpg',
  '/images/morpheus.jpg',
  '/images/.jpg', // double-check this filename
  '/images/parables.png',
  '/images/hopco.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
