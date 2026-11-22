var V="rangedesk-v1",SHELL=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/icon.svg"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==V}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){
 if(e.request.method!=="GET")return;
 e.respondWith(fetch(e.request).then(function(r){var c=r.clone();if(r.ok)caches.open(V).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request).then(function(m){return m||caches.match("index.html")})}));
});
