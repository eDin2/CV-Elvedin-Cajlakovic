"use strict";

var numb = "+";
numb += "43";
numb += "(0)"
numb += "650";
numb += "677";
numb += "71";
numb += "87";

var mail2 = "elve";
mail2 += "din";
mail2 += ".";
mail2 += "caj";
mail2 += "lak";
mail2 += "ovic";
mail2 += String.fromCharCode(64); /* dies is ein ASCII Code welcher ein @ ausgibt */
mail2 += "gm";
mail2 += "ail.c";
mail2 += "om";


function setNumb() {
    document.getElementById("numb").innerHTML = '<a href="' + "tel:" + '+' + '43' + '(0)650' + '677' + '71' + '87' + numb + '" target="_blank">' + numb + "</a>";
}

function setmail2() {
    document.getElementById("mail2").innerHTML = '<a href="' + "mai" + 'lto' + ":" + mail2 + '" target="_blank">' + mail2 + "</a>";
}

document.getElementById("numbAktivieren").onclick = setNumb;
document.getElementById("mailaktivieren2").onclick = setmail2;