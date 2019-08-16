"use strict";

var mail1 = "elve";
mail1 += "din";
mail1 += ".";
mail1 += "caj";
mail1 += "lak";
mail1 += "ovic";
mail1 += String.fromCharCode(64); /* dies is ein ASCII Code welcher ein @ ausgibt */
mail1 += "gm";
mail1 += "ail.c";
mail1 += "om";

function setmail() {
    document.getElementById("mail1").innerHTML = '<a href="' + "mai" + 'lto' + ":" + mail1 + '" target="_blank">' + mail1 + "</a>";
}

document.getElementById("mailaktivieren").onclick = setmail;