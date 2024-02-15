function keyuprase(event) {
  const keyEvent = event.key;

  if (keyEvent === "Escape") {
    hideItem("play-graund");
    removeIemandshow("Your-score");
  }

  const mygrawond = document.getElementById("graound");
  const currentAlpabet = mygrawond.innerText;
  const lettar = currentAlpabet.toLowerCase();

  if (keyEvent === lettar) {
    reomebackground(lettar);
    continewGame();
    CountScore("current-scor");
    const result = document.getElementById("result");
    result.innerText = CountScore("result");
  } else {
    const stop = Incriselife("life");
    if (stop === 0) {
      hideItem("play-graund");
      removeIemandshow("Your-score");
    }
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

document.getElementById("play-agean").addEventListener("click", playagen);

// play agean
function playagen() {
  hideItem("Your-score");
  removeIemandshow("play-graund");
  newdicremant("life", 10);
  newincrimant("current-scor", 0);
  //   continewGame();
  setTextElemant();
}
