// PushAlert-ൽ നിന്നുള്ള കോഡ് ഇവിടെ ചേർക്കുക
importScripts("https://cdn.pushalert.co/sw-87210_4.js");

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // PWA ഇൻസ്റ്റാൾ ആകാൻ ഇത് നിർബന്ധമാണ്

});
