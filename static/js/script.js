// Number of guesses
const numberOfGuesses = 10;

//UI elements
class UI {
  constructor() {
    this.guessContainer = document.getElementById("guess-container");
    this.winContainer = document.getElementById("win-container");
    this.loseContainer = document.getElementById("lose-container");
    this.endgameContainer = document.getElementById("endgame-container");
    this.btnForm = document.getElementById("questionForm");
    this.wrongGuesses = document.getElementById("wrong");
    this.rightGuesses = document.getElementById("right");
  }
}

//Get the right answer from the buttons
function getAnswer(btn, translatedWord) {
  let input = btn.innerText;
  checkWord(input, translatedWord.input);
}

//Check if the answer is right or wrong and inputs the appropriate message.
const checkWord = (word, translatedWord) => {
  const ui = new UI();

  if (word === translatedWord) {
    //If matches the word
    // hides all the text and shows pot of gold svg with a winner message
    ui.guessContainer.classList = "hide";
    ui.winContainer.classList = "";
    ui.loseContainer.classList = "hide";
    ui.btnForm.classList = "hide";
    rightGuessesLS();
    setTimeout(() => {
      window.location.pathname = "/play";
    }, 3000);
  } else {
    //if wrong answer
    // hide all text and show a drink svg with a loser message
    ui.guessContainer.classList = "hide";
    ui.winContainer.classList = "hide";
    ui.loseContainer.classList = "";
    ui.btnForm.classList = "hide";
    wrongGuessesLS();
    setTimeout(() => {
      window.location.pathname = "/play";
    }, 3000);
  }
  const counter = incrementCounterLS();
  checkCounter(counter);
};

//Set a guesses counter on the local storage
const incrementCounterLS = () => {
  //Check to see if the localstorage variable exists. If it does not, this is the first time coming to the page, and we need to initalize it to 0
  if (localStorage.getItem("clickCounter") === null) {
    // Store
    localStorage.setItem("clickCounter", "0");
  }

  if (localStorage.getItem("clickCounter") === null) {
    // Store
    localStorage.setItem("clickCounter", "0");
  }

  // Get the value from local storage
  var value = parseInt(localStorage.getItem("clickCounter"));

  // Incrememtnt the count by 1
  var newValue = value + 1;

  //Write the value back to local storage
  localStorage.setItem("clickCounter", newValue);

  return newValue;
};

//Set right guesses counter on the local storage
const rightGuessesLS = () => {
  //Check to see if the localstorage variable exists. If it does not, this is the first time coming to the page, and we need to initalize it to 0
  if (localStorage.getItem("rightCounter") === null) {
    // Store
    localStorage.setItem("rightCounter", "0");
  }

  if (localStorage.getItem("rightCounter") === null) {
    // Store
    localStorage.setItem("rightCounter", "0");
  }

  // Get the value from local storage
  var value = parseInt(localStorage.getItem("rightCounter"));

  // Incrememtnt the count by 1
  var newValue = value + 1;

  //Write the value back to local storage
  localStorage.setItem("rightCounter", newValue);
};

//Set wrong guesses counter on the local storage
const wrongGuessesLS = () => {
  //Check to see if the localstorage variable exists. If it does not, this is the first time coming to the page, and we need to initalize it to 0
  if (localStorage.getItem("wrongCounter") === null) {
    // Store
    localStorage.setItem("wrongCounter", "0");
  }

  if (localStorage.getItem("wrongCounter") === null) {
    // Store
    localStorage.setItem("wrongCounter", "0");
  }

  // Get the value from local storage
  var value = parseInt(localStorage.getItem("wrongCounter"));

  // Incrememtnt the count by 1
  var newValue = value + 1;

  //Write the value back to local storage
  localStorage.setItem("wrongCounter", newValue);
};

// Reset local storage to 0
function clickReset() {
  localStorage.setItem("clickCounter", "0");
  localStorage.setItem("rightCounter", "0");
  localStorage.setItem("wrongCounter", "0");
}

//Check if the amount of guesses left
const checkCounter = (value) => {
  if (value >= numberOfGuesses) {
    setTimeout(() => {
      window.location.pathname = "/gameover";
    }, 3000);
  }
};

(function showScore() {
  if (window.location.pathname === "/gameover") {
    const ui = new UI();
    ui.wrongGuesses.innerHTML = localStorage.getItem("wrongCounter");
    ui.rightGuesses.innerHTML = localStorage.getItem("rightCounter");
  }
})();
