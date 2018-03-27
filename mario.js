---
layout: null
---
 const staticCacheName = "siteCache";
 console.log("install service worker");
 const filesToCache = [
   "/",
   "/index.html"
   "assets/images",
   "assets/app.css",
   "assets/app.js"

 ];

self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(siteCache)
    .then(function(cache){
      return cache.addAll(filesToCache);
    })
  );
})

self.addEventListener("activate", function(event){
   event.waitUntil(
     caches.keys().then(function(cacheNames){
       return Promise.all(
         cacheNames.filter(function(cacheName){
           return cacheName.startsWith("siteCache")
             && cacheName != staticCacheName;
         }).map(function(cacheName){
           return caches.delete(cacheName);
         })
       );
     })
   )
 });

self.addEventListener("fetch", function(event){
  event.respondWith(
     caches.match(event.request).then(function(response) {
       return response || fetch(event.request);
     })
   )
});
