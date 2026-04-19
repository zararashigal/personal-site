async function search4lobby () {
    let endpoint = "https://shodan.zarashigal.eu.org/lobbies";
    try {
        let response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        let result = await response.json();
        console.log(result);
    } catch(_){}
}