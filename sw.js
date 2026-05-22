const CACHE = 'esequibo-fc-v1';
const ASSETS = [
  '/esequibo-fc-dev/',
  '/esequibo-fc-dev/index.html',
  '/esequibo-fc-dev/app.html',
  '/esequibo-fc-dev/manifest.json',
  '/esequibo-fc-dev/icon-192.png',
  '/esequibo-fc-dev/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
