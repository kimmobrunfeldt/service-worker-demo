function installServiceWorker() {
    navigator.serviceWorker.register('service-worker.js', {
        scope: '/my-blog/'
    }).then(function(sw) {
        console.log('Service worker succesfully registered.');
    }).catch(function(err) {
        console.error('Service worker registering failed.');
        throw err;
    });
}

if (navigator.serviceWorker) {
    installServiceWorker();
}