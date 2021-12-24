MinecraftAPI.getServerStatus('mc.crewcraftserver.net', {
    port: 25566 // optional, only if you need a custom port
}, function (err, status, players) {
    if (err) {
        return document.querySelector('.server-status').innerHTML = 'Error loading status';
    }

    // you can change these to your own message!
    document.querySelector('.server-online').innerHTML = status.online ? 'Online' : 'Offline';
    document.querySelector('.server-players').innerHTML = status.players.now;
    document.querySelector('.server-version').innerHTML = status.server.name;
    document.querySelector('.server-players-max').innerHTML = status.players.max;

});