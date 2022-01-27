// TODO: Bruk getElementById til å hente HTML med #id
// TODO: Bruk querySelector til å hente knappen
const numbersUl = document.getElementById("numbers");
const guessUl = document.getElementById("guess");
const button = document.querySelector("button");
// TODO: Lag en liste med tallene som skal sorteres
const numbers = [1, 4, 2, 3, 8, 7, 6, 5];

const getGuess = () => {
  // TODO: Bruk querySelectorAll på guessUl for å hente ut alle input feltene
  const answers = document.querySelectorAll("input");
  // TODO: Bruk .map for å hente ut verdiene i input feltene
  return Array.from(answers).map((answer) => answer.value);

};

const checkNumberSeq = () => {
  const guess = getGuess();
  let isCorrect = numbers.sort().join("") === guess.join("");
  if (isCorrect) {
      alert("Du sorterte riktig");
  }
  if (!isCorrect) {
      alert('wrong')
  }
};


const addInputUI = () => {
    // TODO: Bruk for-of (eller vanlig for-løkke) og guessUl til å lage li-elementer med input elementer for å kunne skrive inn hva som skal sorteres
    for (let element of numbers) {
    
        const li = `<li><input></input></li>`;
        guessUl.innerHTML += li;
      }
    
    };
//console.log(guessUl);
const addNumbersUI = () => {
  // TODO: Bruk for-of (eller vanlig for-løkke) og numbersUl til å lage li-elementer med tallene som skal sorteres
  for (let value of numbers) {
    const li = value;
    numbersUl.innerHTML += `<li>${li}</li>`
    // numbersUl.innerHTML += ${li}, ;
  }
};

const createUI = () => {
  addNumbersUI();
  addInputUI();
};

createUI();



button.addEventListener("click", checkNumberSeq);
