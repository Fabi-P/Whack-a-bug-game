//global variables declaration

const score = document.querySelector('.scoreCounter');
const timer = document.querySelector('.timerCounter');
const gameOver = document.querySelector('.gameOver');
const cells = document.querySelectorAll('.cell');
const play = document.querySelector('.play');

let timeLeft = 5;

//make bug appear on random cell
//create random number
function getRandomIndex() {
  let index = Math.floor(Math.random() * 8);
  return index;
}

//use number to add bug in random cell
function putRandomBug(index) {
  cells[index].classList.add('bug');
}

//remove bug 
function removeBug(index) {
  cells[index].classList.remove('bug');
}

//this starts the bug movement at an interval of 800millsec
function startBug() {
  movingBug = setInterval(() => {
    index = getRandomIndex();
    putRandomBug(index);
    setTimeout(()=> {
      removeBug(index);
    }, 700);
  }, 800);
  
}

//start timer
function countDown(){
  timerStarter = setInterval(()=> {
    timer.innerText = timeLeft;
    timeLeft--;
  }, 1000);
  //end timer
  // setTimeout(()=> {
    
  // }, 6000);
}


//start game on play
play.addEventListener('click', function playGame() {
  
  score.innerText = 0;
  timeLeft = 5;
  gameOver.hidden = true;
  startBug();
  countDown();
  //stop game after 5 sec
  setTimeout(function endGame() {
    //stops the bugs
    clearInterval(movingBug);
    //end timer
    clearInterval(timerStarter);
    timer.innerText = 0;
    gameOver.hidden = false;  
  }, 6000);

});

//change bug to splat on click
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function splat(){
    if (cells[i].classList.contains('bug')) {
      removeBug(i);
      cells[i].classList.add('splat');
      //increase score
      score.innerText++;
      //remove splat after some time
      setTimeout(()=> {
        cells[i].classList.remove('splat');
      }, 500);
    }
  });
};


