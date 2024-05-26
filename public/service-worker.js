self.addEventListener('install', event => {
    console.log('Service worker installing...');
    event.waitUntil(
      caches.open('static-v1').then(cache => {
        return cache.addAll([
          './',
          './index.html',
          
          './logo.png',
          './manifest.json'
        ]);
      })
    );
  });
  
  self.addEventListener('activate', event => {
    console.log('Service worker activating...');
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => {
            return cacheName !== 'static-v1';
          }).map(cacheName => {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  