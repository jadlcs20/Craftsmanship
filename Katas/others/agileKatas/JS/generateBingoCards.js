import {getRandomNumber} from './additionalFunctions.js';
import {bingoCard} from './consts.js';
//Generates a Bingo Card
function generatingBingoCards(){
    //Generate each column
    bingoCard.splice(0,bingoCard.length);
    generateColumn(bingoCard, 1, 15, 5);
    generateColumn(bingoCard,16, 30, 5);
    generateColumn(bingoCard,31, 45, 5);
    generateColumn(bingoCard,46, 60, 5);
    generateColumn(bingoCard,61, 75, 5);
    bingoCard.sort(function(a, b) {
        return a - b;
      });
    bingoCard[12] = "FREE";
    return bingoCard;
}
//Generate a column of the Bingo Card
function generateColumn(bingoCard, min, max, elemAdded){
    let numAdded = 0;
    let num;
    do {
        num = getRandomNumber(min,max);
        if(!(bingoCard.includes(num))){
            bingoCard.push(num);
            numAdded++;
        }
    } while(numAdded != elemAdded);
    
}

export {generatingBingoCards, generateColumn};