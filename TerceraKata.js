function Player (nombre){

this.nombre = nombre;

let hand = [];
 

let valuesArray = [];
 

let suitsArray = [];

this.checkHand = function(){
    
    let resultString = "";
    let resultValue = 0;
    let cartaAlta = 0;
    
    for(let i = 0; i < 5; i++){

       hand[i] = Math.floor(Math.random() * 52 + 1);
   
    }
    
    convertHand();
    switch(duplicateCards()){
         case "2":
              resultString = "1 Pair";
              resultValue = 2;
              break;
          case "22":
              resultString = "2 Pairs";
              resultValue = 22;
              break;
         case "3":
              resultString = "3 of a Kind";
              resultValue = 3;
              break;
         case "23":
                resultString = "Full House";
                resultValue = 23;
         case "32":
              resultString = "Full House";
              resultValue = 32;
              break;
         case "4":
              resultString = "4 of a Kind";
              resultValue = 4;
              break;
         case "5":
              resultString = "5 of a Kind";
              resultValue = 5;
              break;
         default:
              if(isStraight()){
                   resultString = "Straight";
                   resultValue = 55;     
              }
              if(isAceStraight()){
                   resultString = "Ace Straight";
                   resultValue = 56;
              }
              break;
    }
    if(isFlush()){
         if(resultString){
              resultString += " and Flush";
              resultValue = 57;     
         }
         else{
              resultString = "Flush";
              resultValue = 58;
         }
    }
    if(!resultString){
       
         resultString = "High Card";
         cartaAlta = Math.max(...valuesArray);

    }

    return [resultValue, resultString, cartaAlta];
    
}  
 

function convertHand(){
     for(let i = 0; i < 5; i ++){
          valuesArray[i] = hand[i] % 13;
          suitsArray[i] = Math.floor(hand[i] / 13);     
     }
     
}
 

function occurrencesOf(n){
     let count = 0;
     let index = 0;   
     do{          
          index = valuesArray.indexOf(n, index) + 1;  
          if(index == 0){
               break;
          }
          else{
               count ++;
          }
     } while(index < valuesArray.length);
     return count;
}
 

function duplicateCards(){
     let occurrencesFound = []; 
     let result = "";
     for(let i = 0; i < valuesArray.length; i++){
          let occurrences = occurrencesOf(valuesArray[i]);
          if(occurrences > 1 && occurrencesFound.indexOf(valuesArray[i]) == -1){
               result += occurrences; 
               occurrencesFound.push(valuesArray[i]);    
          }
     }
     return result;
}
 

function getLowest(){
     let min = 12;
     for(let i = 0; i < valuesArray.length; i++){
          min = Math.min(min, valuesArray[i]);     
     }
     return min;     
}
 

function isStraight(){
     let lowest = getLowest();
     for(let i = 1; i < 5; i++){ 
          if(occurrencesOf(lowest + i) != 1){
               return false
          }     
     }
     return true;
}
 

function isAceStraight(){
     let lowest = 8;
     for(let i = 1; i < 5; i++){
          if(occurrencesOf(lowest + i) != 1){
               return false;
          }     
     }
     return occurrencesOf(0) == 1;
}
 

function isFlush(){
     for(let i = 0; i < 4; i ++){
          if(suitsArray[i] != suitsArray[i+1]){
               return false;
          }
     }
     return true;
}  
 
}

const game = (player1, player2) => {

    let player1Game = player1.checkHand();
    let player2Game = player2.checkHand();

    if (player1Game[0] === player2Game[0] && player1Game[2] === player2Game[2]) return "Empate tienen " + player1Game[1];

    if (player1Game [1]> player2Game[1]) {

        return "Jugador 1 Gana " + player1Game[1];
        
    }
    if (player1Game [1]< player2Game[1]) {

        return "Jugador 2 Gana " + player2Game[1];

    }
    if (player1Game[2] > player2Game[2]) {

        return "Jugador 1 Gana High Card " + player1Game[2];
    }
    if (player1Game[2] < player2Game[2]) {

        return "Jugador 2 Gana High Card " + player2Game[2];
    }
    

}

let player1 = new Player('Jugador1');
let player2 = new Player('Jugador2');

console.log (game(player1,player2));