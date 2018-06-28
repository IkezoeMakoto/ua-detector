const CACHE_NAME = 'ua-detector-v1';
const urlsToCache = [
    '/',
    '/?utm_source=homescreen',
    '/js/detect.js'
];

self.addEventListener('fetch', (event) => {
    // インストール処理
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});