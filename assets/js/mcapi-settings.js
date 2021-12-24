MinecraftAPI.getServerStatus('mc.crewcraftserver.net', {
    port: 25566 // optional, only if you need a custom port
}, function (err, status) {
    if (err) {
        return document.querySelector('.ccs2-server-status').innerHTML = 'CCS 2.0: Error loading status';
    }

    // you can change these to your own message!
    document.querySelector('.ccs2-server-online').innerHTML = status.online ? 'Online' : 'Offline';
    document.querySelector('.ccs2-server-players').innerHTML = status.players.now;
    document.querySelector('.ccs2-server-version').innerHTML = status.server.version;
    document.querySelector('.ccs2-server-players-max').innerHTML = status.players.max;

});

MinecraftAPI.getServerStatus('legacy.crewcraftserver.net', {
    port: 25580 // optional, only if you need a custom port
}, function (err, status) {
    if (err) {
        return document.querySelector('.ccs-server-status').innerHTML = 'CCS Legacy: Error loading status';
    }

    // you can change these to your own message!
    document.querySelector('.ccs-server-online').innerHTML = status.online ? 'Online' : 'Offline';
    document.querySelector('.ccs-server-players').innerHTML = status.players.now;
    document.querySelector('.ccs-server-version').innerHTML = status.server.version;
    document.querySelector('.ccs-server-players-max').innerHTML = status.players.max;

});