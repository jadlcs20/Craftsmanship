// Show list of numbers called
import {numbersCalled} from './consts.js';
import {callingBingoNumbers} from './callingBingoNumbers.js';
document.getElementById("button1").addEventListener("click", function(){    
    document.getElementById("var1").innerHTML = callingBingoNumbers();
    document.getElementById("arr1").innerHTML = JSON.stringify(numbersCalled,null,(numbersCalled.length-1));
    document.getElementById("var2").innerHTML = numbersCalled.length;
});

// Show a Bingo Card
import {generatingBingoCards} from './generateBingoCards.js';
import {makeTableHTML} from './additionalFunctions.js';

document.getElementById("button2").addEventListener("click", function(){
    
    document.getElementById("carta1").innerHTML = makeTableHTML(generatingBingoCards());
});

// Check Bingo Card if is Winner
import {checkingBingoCards} from './chekingBingoCards.js';
import {bingoCard} from './consts.js';
document.getElementById("button3").addEventListener("click", function(){
    if(checkingBingoCards(bingoCard,numbersCalled)){
        document.getElementById("resultado1").innerHTML = "Eres ganador";
        numbersCalled.splice(0, numbersCalled.length);
    } else{
        document.getElementById("resultado1").innerHTML = "Todavia te faltan numeros";
    }
    numbersCalled.pop();
});