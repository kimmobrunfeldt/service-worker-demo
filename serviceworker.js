// Install is called when the page is loaded first time, or when the service
self.addEventListener('install', function(event) {
    console.log('Installing Service Worker');

});

self.addEventListener('fetch', function(event) {
    console.log('Received fetch');
    console.log(event);

    if (endsWith(event.request.url, 'magic.html')) {
        console.log('Request does not end with index.html');
        console.log('Do magic!');

        event.respondWith(
            new Response('This came from the service worker!')
        );
    }

    if (/\.jpg$/.test(event.request.url)) {
        console.log('Replace image!');

        event.respondWith(
            fetch('https://www.reactiongifs.com/wp-content/uploads/2011/09/mind_blown.gif', {
                mode: 'no-cors'
            })
        );
    }
});

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}