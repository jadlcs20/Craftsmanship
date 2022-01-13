//Get a number without repetitions
import {numbersCalled} from './consts.js';
function getRandomNumber(min, max){
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random()*(max-min+1)+min)
    } while(numbersCalled.includes(randomNumber));
    return randomNumber;
}
//Create Bingo Card on HTML
function makeTableHTML(myArray, horizontal = 5, vertical = 5) {
    var result = "<table border=1>";
    result += "<tr><td>B</td><td>I</td><td>N</td><td>G</td><td>O</td></tr>";
    for(var i=0; i<horizontal; i++) {
        result += "<tr>";
        for(var j=0; j<vertical; j++){
            result += "<td>"+myArray[j*vertical + i]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";
    return result;
}

export{getRandomNumber, makeTableHTML};

