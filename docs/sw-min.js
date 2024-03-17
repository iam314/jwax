const version=1,cacheName="thatsWhatSheSaid1",cacheList=["./","./index.html","./about.html","./ccs/main.css","./404.html","./404.png","./main.js"];function cacheOnly(e){return caches.match(e.request)}function cacheFirst(e){return caches.match(e.request).then((t=>t||fetch(e.request)))}function networkOnly(e){return fetch(e.request)}function networkFirst(e){return fetch(e.request).then((t=>t.ok?t:caches.match(e.request)))}function staleWhileRevalidate(e){return caches.match(e.request).then((t=>{let n=fetch(e.request).then((t=>caches.open(cacheName).then((n=>(n.put(e.request,t.clone()),t)))));return t||n}))}function networkRevalidateAndCache(e){return fetch(e.request,{mode:"cors",credentials:"omit"}).then((t=>t.ok?caches.open(cacheName).then((n=>(n.put(e.request,t.clone()),t))):caches.match(e.request)))}function placeholderImage(e){return caches.match("./404.png")}function Html404(e){return caches.match("./404.html")}function fakeServerError(e){return new Response("<html><body><h1>Server Gone Crazy</h1></body></html>",{status:555,statusText:"Server Gone Crazy",headers:{"content-type":"text/html"}})}function blahblahblah(e){}self.addEventListener("install",(e=>{e.waitUntil(caches.open(cacheName).then((e=>{e.addAll(cacheList)})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((e=>Promise.all(e.filter((e=>e!=cacheName)).map((e=>caches.delete(e)))))))})),self.addEventListener("fetch",(e=>{const t=self.navigator.onLine,n=new URL(e.request.url),a=(n.hostname.includes("picsum.photos")||n.pathname.includes(".png")||n.pathname.endsWith(".jpg"),n.hostname.includes("random-data-api.com"),n.pathname.endsWith(".css")||n.hostname.includes("googleapis.com"),e.request.mode,n.hostname.includes("gstatic")||n.pathname.endsWith("woff2"),new URL(self.location));"cors"==e.request.mode||(a.hostname,n.hostname);t?e.respondWith(networkRevalidateAndCache(e)):e.respondWith(cacheOnly(e))}));
//# sourceMappingURL=sw-min.js.map