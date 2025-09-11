const input = document.getElementById('input');
const submit = document.getElementById('submit');
const restart = document.getElementById('restart');
const result = document.getElementById('result');
const attemptspan = document.getElementById('attemptspan');
const restt = document.getElementById('restt');

let randomNum =Math.floor(Math.random()*10);
let attempts =0;

function initGame(){
    randomNum = Math.floor(Math.random()*10);
    attempts = 0;
    result.textContent = "Take a Guess!";
    attemptspan.textContent = attempts;
    input.value = '';
    input.disabled = false;
    submit.disabled = false;
}

function Guess(){
    const userGuess = Number(input.value);
    if(userGuess<0 || userGuess>10 || isNaN(userGuess)){
        result.textContent = "Please enter a valid number between 0 and 10";
        result.className = "text-red-600 font-bold";
        return;
    }
    attempts++;
    attemptspan.textContent = attempts;
    if(userGuess === randomNum){
        result.textContent= `${userGuess} is correct guess!`;
        result.className = "text-green-600 mt-10 text-[2em]";
        input.disabled=true;
        submit.disabled=true;
        attempts++;
       restt.textContent = "Restart Game!";
       restt.className ="text-[25px] mt-4";
    }
    else if(userGuess<randomNum){
        result.textContent = "Your Guess is too low";
        result.className="text-yellow-600 mt-10 text-[2em] ";
        input.value='';
    }
    else{
        result.textContent = "Your Guess is too high.";
        result.className = "text-orange-600 mt-10 text-[2em]";
        input.value = '';
    }
}

submit.addEventListener("click",Guess);
restart.addEventListener("click",initGame);
initGame();