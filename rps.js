
let rock = document.querySelector('#rock');
let papper = document.querySelector('#papper');
let scissors = document.querySelector('#scissors');
let btn = document.querySelector('button');
let div = document.querySelector('div');


var hChoice;
let humanScore = 0;
let computerScore = 0;

const contentTrack = document.createElement('div');

div.appendChild(contentTrack);


rock.addEventListener("click", function btn_rock(e){
    hChoice = "rock";
    console.log(hChoice);
    playRound(hChoice,getComputerChoice());
    if (humanScore ==5 || computerScore == 5){
        console.log('paso rock');
        e.preventDefault();
    };
    console.log(humanScore,computerScore);
    // trackScore(humanScore,computerScore);
    contentTrack.textContent = `HUMAN: ${humanScore} - COMPUTER ${computerScore}`;
    trackScore(humanScore,computerScore);
});

papper.addEventListener("click", function btn_papper(e){
    hChoice = "papper";
    console.log(hChoice);
    playRound(hChoice,getComputerChoice());
    if (humanScore ==5 || computerScore == 5){
        console.log('paso papper');
        e.preventDefault();
    }
    console.log(humanScore,computerScore);
    // trackScore(humanScore,computerScore);
    contentTrack.textContent = `HUMAN: ${humanScore} - COMPUTER ${computerScore}`;
    trackScore(humanScore,computerScore);

});

scissors.addEventListener("click", function btn_scissors(e){
    hChoice = "scissors";
    console.log(hChoice);
    
    playRound(hChoice,getComputerChoice());
    if (humanScore ==5 || computerScore == 5){
        console.log('paso scissors');
        e.preventDefault();
    };
    console.log(humanScore,computerScore);
    // trackScore(humanScore,computerScore);
    contentTrack.textContent = `HUMAN: ${humanScore} - COMPUTER ${computerScore}`;
    trackScore(humanScore,computerScore);
});

function trackScore(hScore,cScore){
    if (hScore == 5){
        contentTrack.textContent = 'HUMANS WINS';
    }
    else if (cScore == 5) {
        contentTrack.textContent = 'COMPUTERS WINS';
    };
};



function getComputerChoice() {
    const valorComp = ["rock","papper","scissors"];

    return valorComp[(Math.floor(Math.random() * valorComp.length))];
        }

function getHumanChoice() {
    // console.log(hChoice);
}

// let humanScore = 0;
// let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    

    if (humanChoice == computerChoice) {
        console.log("Empate");
    } else if (humanChoice=="rock" & computerChoice=="papper"){
        console.log("papel vence a piedra, Perdiste!!");
        computerScore = computerScore + 1;
    } else if (humanChoice=="rock" & computerChoice=="scissors"){
        console.log("piedra vence a tijeras, Ganaste!!");
        humanScore = humanScore + 1;
    } else if (humanChoice=="papper" & computerChoice=="rock") {
        console.log("Papel vence a piedra, Ganasta!!");
        humanScore = humanScore + 1;
    } else if (humanChoice=="papper" & computerChoice=="scissors"){
        console.log("Tijeras vence a papel, Perdiste!!");
        computerScore = computerScore+1;
    } else if (humanChoice=="scissors" & computerChoice=="rock"){
        console.log("Piedra vence a tijeras, Perdiste!!");
        computerScore = computerScore+1;
    } else if (humanChoice=="scissors" & computerChoice=="papper"){
        console.log("Tijeras vence a papel, Ganaste!!");
        humanScore = humanScore + 1;
    }

}


//LOGIC TO PLAY 5 ROUNDS
// function playGame() {
//     let i = 0;
//     while (i<5) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         rounds = playRound(humanSelection, computerSelection);
//         i++;
//     }

// console.log(playGame())
// console.log(valorComp) 
// console.log(get) 

// console.log(`El marcador final es: Humano ${humanScore} - Computadora ${computerScore}.`)