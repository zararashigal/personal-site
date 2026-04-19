async function search4lobby () {
    let endpoint = "https://shodan.zarashigal.eu.org/lobbies";
    try {
        let response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        let result = await response.json();
        await document.getElementById("foundCode").classList.remove("hideRoom");
        document.getElementById("foundCode").innerHTML = await `Found Lobby! Roomcode: ${result[Math.floor(Math.random() * result.length)]}`;
    } catch(_){}
}

async function hostLobby () {
    let room = document.getElementById("room")
    
    if (room.value.length != 4)
        return;

    let endpoint = "https://shodan.zarashigal.eu.org/host?roomCode=";
    try {
        let response = await fetch(`${endpoint}${room.value.toUpperCase()}`);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        let result = await response;
        await console.log(result);
        await document.getElementById("hostedLobby").classList.remove("hideRoom");
        document.getElementById("hostedLobby").innerHTML = await `Hosting room ${room.value.toUpperCase()} on matchmaking srv for others to search...`;
        room.value = await "";
    } catch(_){}
}