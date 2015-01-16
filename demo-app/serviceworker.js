// Install is called when the page is loaded first time, or when the service
this.addEventListener('install', function(event) {
    console.log('Installing Service Worker');

    event.waitUntil(

        // Cache version 'static-v1'
        caches.open('static-v1').then(function(cache) {
            return cache.addAll([
                '/fallback.html'
            ]);
        })
    );
});

this.addEventListener('fetch', function(event) {
    console.log('Received fetch');

    event.respondWith(
        new Response('This came from the service worker!')
    );
})