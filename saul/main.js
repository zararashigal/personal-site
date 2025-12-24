var vid = document.getElementById ("boostervid");
vid.controls = false;

var ended = false;
var cardsList = [];
var cardNums = 14;

Array.prototype.aRand = function () {    
  return this[Math.floor(Math.random()*this.length)];
}

for (let i = 1; i <= cardNums; i++) {
    cardsList.push (`cards/${i}.mp4`);
}

    let preloads = document.querySelectorAll (".preloader");

    preloads.forEach ((e) => {
        e.controls = false;
        e.remove ();
    });

    let cs = document.querySelectorAll (".card");

    cs.forEach ((e) => {
        e.controls = false;
    });

function doCards () {

    for (let i = 1; i <= 6; i++) {

        let card = document.createElement ("video");
        card.src = cardsList.aRand ();
        card.classList.add ("card");
        card.controls = false;
        card.addEventListener ("mouseenter", () => {
            card.play ();
        });
        
        card.addEventListener ("mouseleave", () => {
            card.pause ();
            card.currentTime = 0;
        });

        document.getElementById ("cards").appendChild(card);

    }

    /* document.getElementById ("cards").scrollIntoView ({ behavior: "smooth" }); */

}

function start () {

    let allCards = document.querySelectorAll (".card");

    allCards.forEach ((e) => {
        try { e.remove () } catch (_) {};
    });

    ended = false;

    try { 
        
        vid.currentTime = 0.001;
        
        setTimeout(() => {
            vid.play ()
        }, 5);

    } catch (_) {};
    
    try { vid.addEventListener("ended", (event) => {

        if (!ended) {
            ended = true;
            doCards ();
            vid.currentTime = 0.001;
        }

    }) } catch (_) {};

}