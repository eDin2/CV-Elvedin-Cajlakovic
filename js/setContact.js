"use strict";

let numb = "+";
numb += "43";
numb += "650";
numb += "677";
numb += "71";
numb += "87";

let mail1 = "elve";
mail1 += "din";
mail1 += ".";
mail1 += "caj";
mail1 += "lak";
mail1 += "ovic";
mail1 += String.fromCharCode(64); /* dies is ein ASCII Code welcher ein @ ausgibt */
mail1 += "gm";
mail1 += "ail.c";
mail1 += "om";


function setNumb() {
    document.getElementById("numb").innerHTML = '<a href="' + "tel:" + '+' + '43' + '650' + '677' + '71' + '87' + numb + '" target="_blank">' + numb + "</a>";
}

function setmail() {
    document.getElementById("mail1").innerHTML = '<a href="' + "mai" + 'lto' + ":" + mail1 + '" target="_blank">' + mail1 + "</a>";
}


window.onload = function () {
    document.getElementById("numbAktivieren").onclick = setNumb;
    document.getElementById("mailaktivieren").onclick = setmail;
}

