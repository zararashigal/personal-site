var vid = document.getElementById ("boostervid");
var ended = false;
var cardsList = [];

Array.prototype.aRand = function(){
  return this[Math.floor(Math.random()*this.length)];
}

for (let i = 1; i <= 13; i++) {
    cardsList.push (`cards/${i}.mp4`);
}

console.log(cardsList);

function doCards () {

    for (let i = 1; i <= 5; i++) {

        let card = document.createElement("video");
        card.src = cardsList.aRand();
        card.classList.add("card");

        card.addEventListener ("mouseenter", () => {
            card.play();
        });
        
        card.addEventListener ("mouseleave", () => {
            card.pause();
            card.currentTime = 0;
        });

        document.getElementById ("cards").appendChild(card);

    }

    document.getElementById ("cards").scrollIntoView ({ behavior: "smooth" });



}

function start () {

    let allCards = document.querySelectorAll(".card");

    allCards.forEach ((e) => {
        try { e.remove () } catch (_) {}
    });

    ended = false;
    vid.play();
    vid.currentTime = 0.01;

    vid.addEventListener("ended", (event) => {
        if (!ended) {
            vid.currentTime = 0.01;
            ended = true;
            doCards();
        }
    });

}