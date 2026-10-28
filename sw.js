const CACHE_NAME = 'ibacmi-scholarship-v2-safe-recovery'
const APP_SHELL = ['./', './manifest.webmanifest', './IBACMI.png']

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName.startsWith('ibacmi-scholarship-') && cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName)),
        ),
      ),
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  const url = new URL(request.url)
  if (request.method !== 'GET' || url.origin !== self.location.origin) return
  const appRoot = new URL('./', self.location.href).pathname
  if (!url.pathname.startsWith(appRoot) || /\/api\/|\/src\/|\/node_modules\//.test(url.pathname)) return
  const publicAsset = /\.(?:js|css|png|jpe?g|webp|svg|woff2?|xlsx|webmanifest)$/.test(url.pathname)
  if (request.mode !== 'navigate' && !publicAsset) return

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone()
          event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, copy)))
        }
        return response
      })
      .catch(async () => {
        const cachedResponse = await caches.match(request)
        if (cachedResponse) return cachedResponse
        if (request.mode === 'navigate') return (await caches.match('./')) || Response.error()
        return Response.error()
      }),
  )
})
