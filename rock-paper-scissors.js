let clicked = 0;
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  ties: 0,
  losses: 0
};

showResults();

function playGame(myMove){
  let computerMove = Math.random();
  let result = '';
  if(computerMove >= 0 && computerMove < 1/3){
    computerMove = 'rock';
  }
  else if(computerMove >= 1/3 && computerMove < 2/3){
    computerMove = 'paper';
  }
  else if(computerMove >= 2/3 && computerMove < 1){
    computerMove = 'scissors';
  }

  if(myMove === 'rock'){
    if(computerMove === 'rock'){
      result = `It's a tie.`;
    }
    else if(computerMove === 'paper'){
      result = 'You lose.';
    }
    else{
      result = 'You win.';
    }
  }
  else if(myMove === 'paper'){
    if(computerMove === 'rock'){
      result = 'You win.';
    }
    else if(computerMove === 'paper'){
      result = `It's a tie.`;
    }
    else{
      result = 'You lose.';
    }
  }
  else if(myMove === 'scissors'){
    if(computerMove === 'rock'){
      result = 'You lose.';
    }
    else if(computerMove === 'paper'){
      result = 'You win.';
    }
    else{
      result = `It's a tie.`;
    }
  }

  let text = `You chose ${myMove}.<br> Computer chose ${computerMove}.<br> ${result}`;
  for (let i = 0; i < text.length; i++) {
    setTimeout(function(index) {
      document.querySelector('.round').innerHTML = text.split('').splice(0, index).join('');
    }, 50 * i, i + 1);
  }

  compareHands(result);
}

function compareHands(result){
  if(result === 'You win.'){
    score.wins++;
  }
  else if(result === 'You lose.'){
    score.losses++;
  }
  else if(result === `It's a tie.`){
    score.ties++;
  }
  showResults();
}

function showResults(){
  document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Ties: ${score.ties} Losses: ${score.losses}`;
  localStorage.setItem('score', JSON.stringify(score));
}

//css
const buttons = document.getElementsByClassName('izbor');

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener('click', function() {
    button.classList.add('transparent');

    setTimeout(function() {
      button.classList.remove('transparent');
    },  750);
  });
}
function disableButton() {
  const buttons = document.querySelectorAll('button');
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true; // Disable each button
  }
  
  setTimeout(function() {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false; // Enable each button after 5 seconds
    }
  }, 3000);
}