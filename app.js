//VARIABLES
let duyme = document.querySelector("#duyme");
let shekil = document.querySelector(".shekil");

let sondur = function sondur() {
    shekil.src = "./turn off.png"
}


let yandir = function yandir() {
    shekil.src = "./turn on.png"
}

duyme.addEventListener("click", function (e) {
    if (shekil.src.match("./turn off.png")) {
        yandir();
    }
    else {
        sondur();
    }
})