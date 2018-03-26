var CACHE = 'cache-only';

self.addEventListener('install', function(evt){
    console.log('The service worker is being installed');

    evt.waitUntil(precache());
});

self.addEventListener('fetch',function(evt){
  console.log('The service woker is serving the asset.');
  evt.respondWith(fromCache(evt.request));
});

function precache(){
  return caches.open(CACHE).then(function(cache){
    return cache.addAll([
      './assets'
    ]);
  });
}


function fromCache(request){
  return caches.open(CACHE).then(function(cache) {
    return cache.match(request).then(fuction(matching) {
      return matching || Promise.reject('no-match');
    });
  });
}
