// The version of the cache.
const VERSION = "v1";

// The name of the cache
const CACHE_NAME = `JWAX-${VERSION}`;

// On install, cache all files and directories under the root directory
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      try {
        // Fetch all files and directories under the root directory
        const files = await getFilesAndDirectories('/');

        // Cache all found files and directories
        await Promise.all(
          files.map(async (file) => {
            try {
              const response = await fetch(file);
              await cache.put(file, response);
            } catch (error) {
              console.error('Failed to fetch:', file, error);
            }
          })
        );
      } catch (error) {
        console.error('Failed to fetch files and directories:', error);
      }
    })()
  );
});

// Helper function to fetch all files and directories under a directory
async function getFilesAndDirectories(directory) {
  const files = [];
  const response = await fetch(directory);
  const text = await response.text();
  const parser = new DOMParser();
  const htmlDocument = parser.parseFromString(text, 'text/html');
  const links = htmlDocument.querySelectorAll('a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href.startsWith('http') && !href.startsWith('//')) {
      const absolutePath = new URL(href, self.location).pathname;
      files.push(absolutePath);
    }
  });

  return files;
}

// delete old caches on activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        }),
      );
      await clients.claim();
    })(),
  );
});

// On fetch, respond with cached responses if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
