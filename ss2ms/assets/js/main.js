async function search4lobby () {
    let endpoint = "https://shodan.zarashigal.eu.org/lobbies";
    try {
        let response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        let result = await response.json();
        await document.getElementById("foundCode").classList.remove("hideRoom");
        document.getElementById("foundCode").innerHTML = await `Found Lobby! Roomcode: ${result[Math.floor(Math.random() * result.length)]}`
    } catch(_){}
}