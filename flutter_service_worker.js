'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "32f1c927aca758f926a4abfd60d88875",
".git/config": "707bf9e73861df26109b7efbbac90820",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1cf30751750de75e5e071ea4b6bab6e7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eb2015f9ed69b0398d05565ab915f015",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea9e5ad33220f5af2e3be3ca97020c5c",
".git/logs/refs/heads/master": "ea9e5ad33220f5af2e3be3ca97020c5c",
".git/logs/refs/remotes/origin/master": "784aeaa3f5303e3df6b007a0580ab5c1",
".git/objects/00/9736297b55db1a9f46bbc7f0522678dd5de28d": "0d69379b32e874859c28e0a229a4c742",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0e/c5562b6bb93bcf6c9a472443f2c9f438ffc03e": "0214990a705e0b4266285e45cd3f694f",
".git/objects/12/7f47f3f7b1ce5917f31274d82ab81eb1656d2a": "1135934afd1479c39318dad238ff58e5",
".git/objects/16/b7ae7b6a9f9acc1d37f163828b555fe8003519": "e708a2842d796dae7fee6f29b0d7ed3a",
".git/objects/18/2004fa70a018f7eacd4b169b3a6be437aabbf6": "fd7b1cf4bcc333144fe7a059db458d86",
".git/objects/19/45ce5fde8e638a257ece98c8cad610f4fc6dfb": "c10be6ba7ff2d9552174fb6073c2aa95",
".git/objects/1a/938be83567d6101bdbddf1d6a3ba68fa7d4ed2": "d71fcfaf6bcbbe8af56327a74fcce6fc",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/27/a3007d1cf3c2340d666bc84948fdb8e3f4971a": "b0c600769e52ac8e77eddec094bc9281",
".git/objects/27/eb247c40b2b6ec0dc991a25d1c0239e6362c1b": "192a18d520047c8a76361c84d3698dd2",
".git/objects/27/fe0dc556d76c36ed8a54214cb0daec56b47ff1": "aa02f477dc9eb68c1892f25ac9d69ebc",
".git/objects/31/fa44e6ee5de172cff7c22e555bdf398a2215d0": "f9481c8d0f15f975cf4f297808f81865",
".git/objects/32/64c806d8c164468628e78b1e22d2ac2648b8e2": "60b09786da0b7c9686aa67c53e1d465e",
".git/objects/33/819f77e1ee687c831078997bded1e6cf326375": "a2dfb3d874300979f1d30124f6cdf394",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/b7b39d1d727c2440e1c138fd029814a5364693": "977f86735a8d8cc03a61ed3c782b2b38",
".git/objects/40/810e929fbe81e305293789222c20c04994f3f5": "40debf75cfba380b60b3d74c52468d8d",
".git/objects/43/5f02f7a577613a532daa3d7c29b226b52fb590": "fc0ea265af36c993ebd28419ae3ab751",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/4acede0c520f847f75982ca1f671fc6eaa889e": "c4a42624eaa20c8a64455bab6edd0908",
".git/objects/50/550338d4894d4e5b3f5885843e5be31bc6f32c": "77b775320449f73ef9e405c687dda5d1",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/aa5f807881d117ada33591b7c182156294e727": "9572b7c35f7bc82c138fd4742b1ba3b0",
".git/objects/5a/1eece699025428343e0c79e07fe52c98ff7b5e": "d6d06512bc2c994a2e45707f390cbb1f",
".git/objects/5b/5a15b8aadfc139c1b05a2a4ad0896e33049d76": "2ed317ba084b9ba8ee791cdd1625627f",
".git/objects/62/dd3eceb75548e3aecf674a000c73d99b455702": "6221e28b72005897cfb352c97f5de8d7",
".git/objects/66/91b9a3ac0429c77a9e80ba60c9f80a704786f4": "600e611b6cff05ae5349f2285566703a",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/76b4f170c25450d42874e341ef9c3a5a22bc85": "27c96cdf2490256f81f07fe92b90bc2e",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/99/3c51681b32f6184a20d848d897aaee7d12adb0": "b0d70b5e85f28bbe59479653407e9ad2",
".git/objects/9b/c901e8044cfecf40662e43aefb87aab46107d7": "6268e4faeee3f99c14de8f3155adee27",
".git/objects/9e/dc64ce19364969d57e7dd8c6d2bcbd82043bc4": "65205fba39b01a448c052270f5f8422e",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/93a193d5f350d2936871374123af6f872a65e5": "93af074f987113bb4a254a5c7800734e",
".git/objects/ab/9808bc04fc4649b6e49263f9cea4aa197ea423": "df6733f70ceb3b4838bfc2cc430d85e5",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/605323e240b45f387e4a6d7447f0da0f0fa6ce": "26ff0e9a98e2dedffee79fa8d54652ef",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1bc89635e4f4e5ade8dd483aa9ab53074f5ba2": "0fe7b460d426ad48759f9ea46dd4e58f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/88a0bcb54ae1eedc85c0d7d0b2ec846640af4e": "605767f0488f032db8ed571869d21a57",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cb/9ca0455801e85feee26fe55dc8a53da5bd84f5": "66a297473f6398012fb9b5c56d5c681c",
".git/objects/d0/fe5520db3a8dbf7a5d2902a0e1725feab49c68": "41c8616b15286e05816f042b7eba78bc",
".git/objects/d3/0e8811a97b963472a196653253bf6c65bf4da3": "3e3df0914cf22fec6fe3c7dab282235c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/b543e38d9d5dbad2c81b57d9ebef9555ba5d3f": "92976cc937d295e20e9c80508927fb2c",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/8e808a9495d6ae354bcb200c3d8bdabfbbfb0c": "5e1c8bf7fe44d85a61397193adc63737",
".git/objects/da/bba2fe108135463d7cac6990a52bfe63d55747": "a211878915113f0fd5f9590e6e74cda3",
".git/objects/e0/7b0328aca7c5abddcc6cc399c8e1d6ee79eb8f": "85248c4e0fa41d79e577c5429223e078",
".git/objects/e2/54828ca5d2d82ab6f2ca97abafbd05792ec10c": "db023321ccdcc59d765e5f1a52b5c9a2",
".git/objects/e5/ee6d7f8aeabe53e93140bf8b077511f110c4ee": "7d5a03d8a84af07442a0b6e5ab443bb9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/df6d967ca595ab07e8fb6555af292c77d7149c": "6753bda6bb475ee61154d1b1724bc7dc",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/opencode": "8d2232abeef237d59f5bf94437bb81f4",
".git/refs/heads/master": "2e13b20929acd1d1c9f65aa382a216ec",
".git/refs/remotes/origin/master": "2e13b20929acd1d1c9f65aa382a216ec",
".idea/caches/deviceStreaming.xml": "73160a4b620f8fd2f893f22f4cc8b5a0",
".idea/misc.xml": "ce3fe692771dbffc177d76bf99a920ec",
".idea/workspace.xml": "0912a485e37ad7e2cb4b92ebba851f10",
".well-known/apple-app-site-association": "1bbc2049fbcb98b85e1ca95c7e51fcfd",
".well-known/assetlinks.json": "a4e5913190e49649f0363e7a04a473ec",
"404.html": "ef217f4bc101ea1ab32ceeda25f95de2",
"assets/AssetManifest.bin": "29a6642f88b87778552c5a759e9e72b6",
"assets/AssetManifest.bin.json": "866b8ebefc552eca5f7336f566afe2bb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b3ff8c4d6763cd8c7354b1daf9677dd5",
"assets/lib/assets/images/ic_apple_logo.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/lib/assets/images/ic_google_logo.png": "ca2f7db280e9c773e341589a81c15082",
"assets/NOTICES": "98919e4f77fe0741b5c9bc6d8bcd52e8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5f57e28f65cb68fd5e246734cf50cc9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ef217f4bc101ea1ab32ceeda25f95de2",
"/": "ef217f4bc101ea1ab32ceeda25f95de2",
"main.dart.js": "4f6b49e75b0182b5e43c495431b4e2de",
"main.dart.mjs": "c07da650513374ab1859c423f416876d",
"main.dart.wasm": "8993c77719c5fbd8a0dc7654ab00a754",
"manifest.json": "79e451ebb6a2dde5802a8cb34e2da0de",
"version.json": "d2be59fe02ca53028f12f525e7daad9f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
