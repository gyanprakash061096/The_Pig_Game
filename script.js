'use strict';
const score0EL= document.getElementById('score--0');
const score1EL= document.getElementById('score--1');
const currentScoreEL0= document.getElementById('current--0');
const currentScoreEL1= document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playerEL0 = document.querySelector('.player--0');
const playerEL1 = document.querySelector('.player--1');




diceEL.classList.add('hidden');
score0EL.textContent=0;
score1EL.textContent=0;
let playing,score,currentScore,activePlayer;
const init = function(){
    score0EL.textContent=0;
    score1EL.textContent=0;
    currentScoreEL0.textContent=0;
    currentScoreEL1.textContent=0;

    diceEL.classList.add('hidden');
    playerEL0.classList.remove('player--winner');
    playerEL1.classList.remove('player--winner');
    playerEL0.classList.add('player--active');
    playerEL1.classList.remove('player--active');

    playing=true;
    score =[0,0];
    currentScore= 0;
    activePlayer = 0;
};
init();


const switchPlayer=function(){
    currentScore+=diceEL;        
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer===0?1:0;
    currentScore=0;
    playerEL0.classList.toggle('player--active');
    playerEL1.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function()
{
    if(playing)
    {

   
        const dice= Math.trunc(Math.random()*6) + 1;

        diceEL.classList.remove('hidden');
        diceEL.src= `dice-${dice}.png`;

        if(dice !==1)
        {
            // currentScoreEL0.textContent= currentScore;
            currentScore+=dice;        
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
        else
        {
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click',function()
{
        if(playing)
        {
                score[activePlayer] += currentScore;
            
                document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
                
            if(score[activePlayer]>=20){
                playing=false;
                diceEL.classList.add('hidden');
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            }
            else{
                switchPlayer();
            }
        }
});


btnNew.addEventListener('click',init);


