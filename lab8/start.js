if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register('/sw.js')
    .then((event)=> {console.log(event)})
    .catch((error)=>{console.log(error)});
}
else
{
    console.log("service worker is not registered");
}
