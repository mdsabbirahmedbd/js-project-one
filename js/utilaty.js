// this is the hide item 
function hideItem(elemantid) {
  const elemant = document.getElementById("home");
  elemant.classList.add("hidden");
}

// sho elemant 
function removeIemandshow(showElemant) {
  const show = document.getElementById("play-graund");
  show.classList.remove("hidden");
}

// this is the alphabet elemant 
function alfabate() {
  const alpabateString = "abcdefghijklmnopqrstuvwxyz";
  const alfabates = alpabateString.split("");

  const randomNumber = Math.random() * 25;
  const numbers = Math.round(randomNumber);

  const alpabets = alfabates[numbers];
  return alpabets;
}


// this is the setBackgroundColor 
function setBackgroundColor(elmantId) {
  const elemant = document.getElementById(elmantId);
  elemant.classList.add('bg-[#FFA500]');
}

// remove backgroundColor 
function reomebackground (elem){
    const newElemant = document.getElementById(elem);
    newElemant.classList.remove('bg-[#FFA500]')
}

// scor Count 
function CountScore(elem){
const scorElemant = document.getElementById(elem);
let  scorText = scorElemant.innerText
let  scor = parseInt(scorText)
scor++
const finalScore = scorElemant.innerText = scor
 return finalScore
}

function Incriselife(elem){
  const mylife = document.getElementById(elem);
  const lifeText = mylife.innerText;
  let life = parseInt(lifeText);
  life--
  const finallife = mylife.innerText = life;
  return finallife;
}
