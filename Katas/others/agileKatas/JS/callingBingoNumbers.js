import{NUMBERMIN,NUMBERMAX,numbersCalled} from "./consts.js";
import{getRandomNumber} from "./additionalFunctions.js";
//Return a generated random number
function callingBingoNumbers(min = NUMBERMIN, max = NUMBERMAX, arrayNumber = numbersCalled){
    let bingoNumber;
    
    bingoNumber = getRandomNumber(min, max);
    arrayNumber.push(bingoNumber);
    arrayNumber.sort(function(a, b) {
        return a - b;
      });;
    return bingoNumber;
}

export {callingBingoNumbers};