const CACHE = 'brightsteps-class3-v1';
const CORE = [
  '/', '/index.html', '/manifest.webmanifest', '/learn.html', '/practice.html', '/progress.html',
  '/(tabs)/index.html', '/(tabs)/learn.html', '/(tabs)/practice.html',
  '/(tabs)/progress.html', '/_expo/static/js/web/entry-35b9c8ab3aa4b45da5d1f9ecc08cfd55.js',
  '/_expo/static/css/web-aab2dca0061d96b64a833fe96af4afcb.css'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); }
    return res;
  }).catch(() => caches.match('/index.html'))));
});
