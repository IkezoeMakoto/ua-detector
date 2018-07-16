(async() => {
    if ('serviceWorker' in navigator) {
        let registration = null;

        try {
            registration = await
            navigator.serviceWorker.register('/sw.js');
        } catch (err) {
            console.log('ServiceWorker registration failed: ', err);
            return;
        }

        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }
})();