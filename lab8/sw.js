var mycache="mynewcache";
var assets=[
    "/assets/icn.png",
    "/assets/soccer.png",
    "/index.html",
    "/manifest.json","sw.js",
    "/assets/player.png",
    "/assets/tree.jpg"
];

self.addEventListener("install",_event=> {
    console.log("inside install",_event);
    caches.open(mycache)
    .then(Cache=>{
        Cache.addAll(assets)
    });
});


self.addEventListener("activate",_event=>
{
    console.log("inside activate",_event);
});

self.addEventListener("fetch",async(event)=>
{
    event.respondWith(caches.match(event.request)
    .then(respevt=>
    {
        return respevt || fetch(event.request)
    }    )
  
    );
});
