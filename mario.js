---
layout: null
---
 var deferredPromot;

 const staticCacheName = "siteCache";
 console.log("install service worker");
 const filesToCache = [
   "/",
   "/index.html",
   "assets/images",
   "assets/app.css",
   "assets/app.js"

 ];

self.addEventListener('install',function(event){
  event.waitUntil(
    caches.open(siteCache)
    .then(function(cache){
      return caches.addAll(filesToCache);
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

window.addEventListener('beforeinstallprompt', function(e){
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();

  deferredPrompt = e;

  return false;
});


btnSave.addEventListener('click', function(){
  if (deferredPrompt !== undefined){
    deferredPrompt();

    deferredPrompt.userChoice.then(function(choiceResult){
      if(choiceResult.outcome == 'dismissed'){
        console.log('User cancelled home screen install')
      }
      else{
        console.log('User added to home screen');
      }
      deferredPrompt = null;
    });
  }
});
