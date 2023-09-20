var clutter = "";
var timer = 60;
var newhit;
var score = 0 ;
function makebubble() {
    for (var i = 1; i <= 144; i++){
    var random = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector(".boxmain").innerHTML = clutter;
}
makebubble();
document.querySelector("#touchbox").addEventListener("click", function (details){
    var des = Number(details.target.textContent);
    if (newhit == des) {
        increasescore();
        NEWHIT();
        makebubble()
    }
});
function increasescore() {
    score += score+10;
        document.querySelector("#Scoreee").textContent = score;
}

function Timer() {
   var timerr = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timerr);
            document.querySelector(".boxmain").innerHTML = `<h1 id="endgame">Game Over</h1>`

        }
    }, 1000);
}
function NEWHIT() {
    newhit = Math.floor(Math.random() * 10);
    document.querySelector("#newhit").textContent = newhit;
}

NEWHIT();
Timer();
