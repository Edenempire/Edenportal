const CACHE_NAME = 'eden-home-cache-v1';
const OFFLINE_URLS = [
  '/',
  '/index.html',
  '/logo.png',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=VT323&family=Electrolize&family=Orbitron:wght@400;700;900&display=swap',
  'https://fonts.gstatic.com/s/vt323/v12/qWcuB6mppLrxC4WmP.ttf', // example
];

// Install event: cache homepage assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(OFFLINE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate event: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
});

// Fetch event: serve from cache first for offline homepage
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only serve cached homepage offline
  if (url.pathname === '/' || url.pathname === '/index.html') {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResp => cachedResp || fetch(event.request))
        .catch(() => caches.match('/index.html')) // fallback to cached homepage
    );
  }
});
