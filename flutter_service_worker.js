'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/asset/my-store/1.png": "5c59d47d410d243762ce1d36f9cb58f4",
"assets/asset/my-store/2.png": "bbbe935af624022afab80bb1ac4f6cc0",
"assets/asset/my-store/3.png": "3f446436fb1fe421a21507618957a8a8",
"assets/asset/my-store/4.png": "b3d8411a813718f09cf10672460168ef",
"assets/asset/my-store/address.png": "fc65a0112bf5369d1809507862edfee6",
"assets/asset/my-store/banner.webp": "b7648352e291ac5c8f2c0b5fc1be23b7",
"assets/asset/my-store/bannerr.webp": "711c263fbbc62f23adecebfb363a428e",
"assets/asset/my-store/book.png": "b0abff77c09f25d9299092fff937b18e",
"assets/asset/my-store/cafe.jpg": "02c3932924fc51980b50f8197e6056fa",
"assets/asset/my-store/calender.png": "476173c5f6552edbc4a623c30f39df29",
"assets/asset/my-store/call.png": "c25e7406291415fa47b497b8f0ac9e8f",
"assets/asset/my-store/car.jpg": "e37231fccbb8045bfb94afffd733f61e",
"assets/asset/my-store/cart.png": "5642067d4cce236837278cde6fa0529f",
"assets/asset/my-store/cartimg.png": "a66f77359e23bfca01bd1c5df9fc2866",
"assets/asset/my-store/chat.png": "cc9eb669a9b5b99aeecab9b49bcea56b",
"assets/asset/my-store/closed-store-info.png": "eb583aeae8ece8c781be686455f76b3b",
"assets/asset/my-store/clothes.png": "f4c533731d2ad6e83124c3a62c95d3ef",
"assets/asset/my-store/empty-cart.png": "d2f9ffe26adee1fa3aceefbad426232d",
"assets/asset/my-store/fertilizer.png": "82aa82688f85a54b56982f22572488fd",
"assets/asset/my-store/food.png": "755c566fc0fb4279b4b035fa40290a88",
"assets/asset/my-store/grid%2520copy.png": "88fb1b0ed2981fcc1e71712da20f7ce7",
"assets/asset/my-store/grid.png": "88fb1b0ed2981fcc1e71712da20f7ce7",
"assets/asset/my-store/home.png": "7d11a19c2bd6a20e577d8a2a9c3c5553",
"assets/asset/my-store/list%2520copy.png": "fac715cc2965622c984625d57db02581",
"assets/asset/my-store/list.png": "fac715cc2965622c984625d57db02581",
"assets/asset/my-store/locate.png": "bc51aff4b51db042e3b591050a14544b",
"assets/asset/my-store/locate_unselect.png": "9a0a8b9fc72cb0e6f60a93b350d00cca",
"assets/asset/my-store/logo.png": "f236773723347ffd3403bf5c5d0dfd6b",
"assets/asset/my-store/navoffer-selected.png": "ad8213b5d1038d08cca2decfa5547657",
"assets/asset/my-store/navoffer-unselected.png": "f2858664535ef47978e3b6fa9f4718be",
"assets/asset/my-store/newLogo.png": "bc2d3e696e60714eba6405b1e42a9a5e",
"assets/asset/my-store/no-promotions.png": "1a56a783fc323f5026cfff165ca36e61",
"assets/asset/my-store/percent.png": "b0f0451045e81bbe6f23e3f77baef68d",
"assets/asset/my-store/percentage.png": "22593dc2d15e8fa29646136ab2dcf0e2",
"assets/asset/my-store/PLUS-removebg-preview.png": "69322dde348de413f65eecf50b0f1b79",
"assets/asset/my-store/popcorn.png": "e13306dbb86f94dd336e55ce8744bc0d",
"assets/asset/my-store/postion.png": "956a750bb6a90240ac64ec3402c72ad3",
"assets/asset/my-store/pro.jpg": "ccffe047a3836b033deeee8f130aaad7",
"assets/asset/my-store/sale.png": "3a270c57aa63cd4141934f0b6e1463f9",
"assets/asset/my-store/soap.png": "39a6f8de90cf07444c87b153c55b86a5",
"assets/asset/my-store/store.png": "620b098cd3b7c9c507e628b3e2b7d4ec",
"assets/asset/my-store/unselected_cart.png": "2aecb19fc2d31fbffeb0c3e90866701d",
"assets/asset/my-store/unselected_location.png": "e66018773d906692223b719a4cbf4240",
"assets/asset/my-store/unselected_location.png.png": "9a0a8b9fc72cb0e6f60a93b350d00cca",
"assets/asset/my-store/unselected_percent.png": "5ade583ed7069b6813579a6c0f3a279b",
"assets/AssetManifest.bin": "15f98a2089c7989d17504d663214ad34",
"assets/AssetManifest.json": "a21eafdb12893978d517e9b2fbe82bfe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58f1567e9231a4a8416c820a27e95eb6",
"assets/NOTICES": "b165a6220d46ac00bf0d23b867d9649e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "21da2a4dcd3cb234ca95eef6f3a76406",
"/": "21da2a4dcd3cb234ca95eef6f3a76406",
"main.dart.js": "67105452a8149da486706b0f7ddab034",
"manifest.json": "c5af9fb83207de8f87e281089d3fa8bc",
"sqflite_sw.js": "d7943d1c6b44ce4e84bcbb1278e124ab",
"sqlite3.wasm": "8e4ed39391f4e06cd7ae00a2692cc91c",
"version.json": "5fdf2f6e7cf33f284e3fc3b95d073128"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
