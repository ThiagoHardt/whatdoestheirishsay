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
    let guessContainer = document.getElementById("guess-container");
    let winContainer = document.getElementById("win-container");
    let loseContainer = document.getElementById("lose-container");

  if (word === translatedWord) {
    //If matches the word
    //TODO hides all the text and shows pot of gold svg with a winner message
    guessContainer.classList = "hide"
    winContainer.classList = ""
    loseContainer.classList = "hide"
    setTimeout(() => {
        window.location.reload()
    }, 3000);
    
  } else {
    //if wrong answer
    //TODO hide all text and show a drink svg with a loser message
    guessContainer.classList = "hide"
    winContainer.classList = "hide"
    loseContainer.classList = ""
        setTimeout(() => {
        window.location.reload()
    }, 3000);
  }
};

const hideContainer = (container, hide) => {
    let container = document.getElementById(`${container}-container`);
    if(hide){
       container.style.display = "none"
   }else{
       container.style.display = "block"
   }
}
