function keyuprase(event) {
  const keyEvent = event.key;

  const mygrawond = document.getElementById("graound");
  const currentAlpabet = mygrawond.innerText;
  const lettar = currentAlpabet.toLowerCase();

  console.log(lettar, keyEvent);

  if (keyEvent === lettar) {
    reomebackground(lettar);
    continewGame();
    CountScore("current-scor")
} else {
      Incriselife('life')
      
  }
}

document.addEventListener("keyup", keyuprase);

function playNow() {
  hideItem("home");
  removeIemandshow("play-graund");
  continewGame();
}
function continewGame() {
  const result = alfabate();
  const graound = document.getElementById("graound");
  graound.innerText = result;

  setBackgroundColor(result);
}
