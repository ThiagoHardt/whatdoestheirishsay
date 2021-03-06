// Declarations
// set minutes
var mins = 2;
// calculate the seconds
var secs = mins * 60;
// Functions

// Counting function built in js countdown
// goDown is going down 1s as 1000 its 1s in js
function countdown() {
  setTimeout("goDown()", 1000);
}

function goDown() {
  if (document.getElementById) {
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    // if less than a minute remaining
    if (seconds < 59) {
      seconds.value = secs;
    } else {
      minutes.value = getminutes();
      seconds.value = getseconds();
    }
    secs--;
    setTimeout("goDown()", 1000);
  }
}

function getminutes() {
  // minutes is seconds divided by 60, rounded down
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  // take mins remaining (as seconds) away from total seconds remaining
  return secs - Math.round(mins * 60);
}

function getAnswer(btn, translatedWord) {
  let input = btn.innerText;
  checkWord(input, translatedWord.input);
}

const checkWord = (word, translatedWord) => {
  if (word === translatedWord) {
    //If matches the word
    //TODO hides all the text and shows pot of gold svg with a winner message
    let container = document.getElementById("word-container");
    container.style.display = "none";

    console.log("you win");
  } else {
    //if wrong answer
    //TODO hide all text and show a drink svg with a loser message
    console.log("you lose");
  }
};
