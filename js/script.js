const buttons = document.querySelectorAll('.pick');
const choices = ['paper', 'rock', 'scissors'];
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const scoreEl = document.getElementById('score');
const reset = document.getElementById('reset')
const user_select = document.getElementById('user-select');
const computer_select = document.getElementById('computer-select');
const winner =  document.getElementById('win');

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const modal = document.getElementById('modal')

let userChoice = undefined;
let score = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');

        checkWinner();
    });
});

function checkWinner() {
    const computerChoice = pickRandomChoice();

    updateSelection(user_select, userChoice);
    updateSelection(computer_select,computerChoice);
    if(userChoice === computerChoice)
    {
        winner.innerText = 'DRAW'
        winner.style.color="white"
    }
    else if(userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper')
    {
        updateScore();
        winner.innerText = 'YOU WIN'
        winner.style.color="chartreuse";
    }
    else
    {
        winner.innerText = 'YOU LOST'
        winner.style.color="red"
    }

    main.style.display='none';
    selection.style.display='flex';
        
}

reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none';
});

openBtn.addEventListener('click',() => {
    modal.style.display = 'flex';
})

closeBtn.addEventListener('click',() => {
    modal.style.display = 'none';
})

function updateScore() {
    score = score + 1;

    scoreEl.innerText = score;
}

function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(selectionEl, choice) {
    selectionEl.classList.remove('btn-paper')
    selectionEl.classList.remove('btn-rock')
    selectionEl.classList.remove('btn-scissors')

    selectionEl.classList.add(`btn-${choice}`);
    const img = selectionEl.querySelector('img');
    img.src = `img/icon-${choice}.svg`;
    img.alt = choice;
}