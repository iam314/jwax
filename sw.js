// The version of the cache.
const VERSION = "v1";

// The name of the cache
const CACHE_NAME = `JWAX-${VERSION}`;

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return fetchAndCache(cache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

function fetchAndCache(cache) {
  return fetch('/').then(function(response) {
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return cache.put('/', response);
  });
}
