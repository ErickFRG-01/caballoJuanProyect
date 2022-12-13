const staticDevCaballo = "Equipo CaballoJuan"
const assets = [
  "index.html",
  "css/estilos.css",
  "js/nucleo.js",
  "img/pico1.png",
  "img/pico2.png",
  "img/caballo.png",
  "img/nube.png",
  "img/suelo.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCaballo).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
  