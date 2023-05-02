'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/asset/jpg/sample.jpg": "29320f85377b3aa644e03c004a21e0c3",
"assets/asset/png/1.png": "5c59d47d410d243762ce1d36f9cb58f4",
"assets/asset/png/2.png": "bbbe935af624022afab80bb1ac4f6cc0",
"assets/asset/png/3.png": "3f446436fb1fe421a21507618957a8a8",
"assets/asset/png/4.png": "b3d8411a813718f09cf10672460168ef",
"assets/asset/png/banner.webp": "b7648352e291ac5c8f2c0b5fc1be23b7",
"assets/asset/png/bannerr.webp": "711c263fbbc62f23adecebfb363a428e",
"assets/asset/png/basket.png": "60e5e8467403fc87d8bc88a7288861b0",
"assets/asset/png/book.png": "b0abff77c09f25d9299092fff937b18e",
"assets/asset/png/cafe.jpg": "02c3932924fc51980b50f8197e6056fa",
"assets/asset/png/calender.png": "476173c5f6552edbc4a623c30f39df29",
"assets/asset/png/car.jpg": "e37231fccbb8045bfb94afffd733f61e",
"assets/asset/png/cart.png": "4a387bda853bca3782d73234c786a150",
"assets/asset/png/chat.png": "6c1647d5a7d2750f58ac4bdbc67d1779",
"assets/asset/png/clothes.png": "f4c533731d2ad6e83124c3a62c95d3ef",
"assets/asset/png/fertilizer.png": "82aa82688f85a54b56982f22572488fd",
"assets/asset/png/food.png": "755c566fc0fb4279b4b035fa40290a88",
"assets/asset/png/home.png": "e8ad3c6f9e69c1091bcb4f5e36071d0c",
"assets/asset/png/locate.png": "db96f981ac0924882081826bd3349445",
"assets/asset/png/logo.png": "f236773723347ffd3403bf5c5d0dfd6b",
"assets/asset/png/oonzoo.png": "f08cf0ed15906ca52913bf051bf8323c",
"assets/asset/png/percent.png": "b0f0451045e81bbe6f23e3f77baef68d",
"assets/asset/png/PLUS-removebg-preview.png": "69322dde348de413f65eecf50b0f1b79",
"assets/asset/png/popcorn.png": "e13306dbb86f94dd336e55ce8744bc0d",
"assets/asset/png/pro.jpg": "ccffe047a3836b033deeee8f130aaad7",
"assets/asset/png/sale.png": "3a270c57aa63cd4141934f0b6e1463f9",
"assets/asset/png/share.png": "8d90dbe60bf6dab67d3c25b3d1418fd7",
"assets/asset/png/showroom.jpg": "feceacb1bd8c237fd4b5b8fa833a01a2",
"assets/asset/png/showroom2.jpeg": "4c8d86f29359123387d0814682f46390",
"assets/asset/png/showroom3.jpeg": "65038246f691ecf71dc90d8ad633fdcb",
"assets/asset/png/soap.png": "39a6f8de90cf07444c87b153c55b86a5",
"assets/asset/png/store.png": "620b098cd3b7c9c507e628b3e2b7d4ec",
"assets/asset/png/user.png": "cac2522998ee7dff23e9502b749ea9fb",
"assets/AssetManifest.json": "17644996f819281c574a57d794dd207c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "df048b04357f45c6bb4884e7648dc86e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "5000f7ca8eb663d2b67d7f003984cafc",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "90a94662e8bf238f5003a8be2efec2cd",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "4afd99f5fd180b445c384981a66e958e",
"icons/Icon-512.png": "b20780f071aa0e3fbde5016621a9fbc8",
"icons/Icon-maskable-192.png": "4afd99f5fd180b445c384981a66e958e",
"icons/Icon-maskable-512.png": "b20780f071aa0e3fbde5016621a9fbc8",
"index.html": "806b3fcc611d760a133fcd1986db8b7e",
"/": "806b3fcc611d760a133fcd1986db8b7e",
"main.dart.js": "40dd7ee55179c32b34650da837b502b8",
"manifest.json": "f66e44e81aff40b59fd1bb26b04c1b42",
"version.json": "9094aacdae789dccd67fa32109ff1a18"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
