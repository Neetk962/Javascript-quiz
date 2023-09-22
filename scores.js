var lastscore=JSON.parse(localStorage.getItem("scores"))
console.log(lastscore)

var finalinitials= document.querySelector("#finalinitials");
var finalscores= document.querySelector("#finalscores");

finalinitials.textContent=lastscore.initial
finalscores.textContent=lastscore.score

