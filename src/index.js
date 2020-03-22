var playerScore = [0,0];
var currentScore = [0,0];
var currentPlayer = 1;

let game = function() {
                
    rollDice(); 
    hold();
    newGame();
}

let newGame = function() {
    document.querySelector('.new-game').addEventListener('click', function(){
    document.querySelector('.dice').src = './assets/dice-1.svg';
    playerScore = [0,0];
    currentScore = [0,0];
    document.querySelector('.player-1-score').textContent = 0;
    document.querySelector('.player-2-score').textContent = 0;
    document.querySelector('.current-value-1').textContent = 0;
    document.querySelector('.current-value-2').textContent = 0;
    currentPlayer = 1;
    document.querySelector('.circle-1').style.visibility = 'visible';
    document.querySelector('.circle-2').style.visibility = 'hidden';


    });
}


let rollDice = function () {
    document.querySelector('.roll-dice').addEventListener('click', function(){
        var currentDiceValue  = getRandomArbitrary(1,6);
        if(currentDiceValue === 1){
            if(currentPlayer === 1){
                document.querySelector('.circle-' + currentPlayer).style.visibility = 'hidden';
                
                currentPlayer = 2;
                document.querySelector('.circle-' + currentPlayer).style.visibility = 'visible';
                document.querySelector('.player-' + 1 + '-score').textContent = 0;
                currentScore[0] = 0;
            }
            else {
                document.querySelector('.circle-' + currentPlayer).style.visibility = 'hidden';
                currentPlayer = 1;
                document.querySelector('.circle-' + currentPlayer).style.visibility = 'visible';
                document.querySelector('.player-' + 2 + '-score').textContent = 0;
                currentScore[1] = 0;
            }
             

        }
         document.querySelector('.player-' + currentPlayer + '-score').textContent = 
         updateCurrentScore(currentDiceValue, currentPlayer);
        document.querySelector('.dice').src = './assets/dice-' + currentDiceValue + '.svg';
        });
    }
     
 
let updateCurrentScore = function(currentVal, currentPlayer) {
    return currentScore[currentPlayer-1] +=  currentVal;

}   


let hold = function() {
    document.querySelector('.hold').addEventListener('click', function(){

       let currentValue =  parseInt(document.querySelector('.player-' + currentPlayer + '-score').textContent);
        playerScore[currentPlayer - 1] += currentValue;
        document.querySelector('.current-value-' + currentPlayer).textContent = playerScore[currentPlayer - 1];
        console.log(playerScore[currentPlayer - 1])
        if(currentPlayer === 1){
            document.querySelector('.circle-' + currentPlayer).style.visibility = 'hidden';
            currentPlayer = 2;
            document.querySelector('.circle-' + currentPlayer).style.visibility = 'visible';
            document.querySelector('.player-' + 1 + '-score').textContent = 0;
            currentScore[0] = 0;
        }
        else {
            document.querySelector('.circle-' + currentPlayer).style.visibility = 'hidden';
            currentPlayer = 1;
            document.querySelector('.circle-' + currentPlayer).style.visibility = 'visible';
            document.querySelector('.player-' + 2 + '-score').textContent = 0;
            currentScore[1] = 0;
        }
    });


}


function getRandomArbitrary(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}


game();