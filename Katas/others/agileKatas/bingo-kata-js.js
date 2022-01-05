const numbersCalled = [];
//Call one bingonumber without repeating
function callingBingoNumbers(min = 1, max = 75,numbersCalled){
    let bingoNumber;
    
    bingoNumber = getRandomNumber(min, max);
    numbersCalled.push(bingoNumber);
    return bingoNumber;
}
//Get random numbers until the bingoNumber is not in numbersCalled
function getRandomNumber(min, max){
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random()*(max-min+1)+min)
    } while(numbersCalled.includes(randomNumber));
    return randomNumber;
}
//Generate a bingo Card of 24 numbers in 5 columns
function generatingBingoCards(){
    let num;
    const bingoCard = [];
    //Generate each column
    generateColumn(bingoCard, 1, 15, 5);
    generateColumn(bingoCard,16, 30, 5);
    generateColumn(bingoCard,31, 45, 4);
    generateColumn(bingoCard,46, 60, 5);
    generateColumn(bingoCard,61, 75, 5);
    bingoCard.sort(function(a, b) {
        return a - b;
      });
    return bingoCard;
}
//Add a column to the bingoCard with min and max customize for each column
//with an exception for column N
function generateColumn(bingoCard, min, max, elemAdded){
    let numAdded = 0;
    do {
        num = getRandomNumber(min,max);
        if(!(bingoCard.includes(num))){
            bingoCard.push(num);
            numAdded++;
        }
    } while(numAdded != elemAdded);
    
}
//Check if the bingoCard has all numbers called
function checkingBingoCards(bingoCard, numbersCalled){
    return bingoCard.every(element => numbersCalled.indexOf(element) > -1);
}
//Main test with one player, the game stop when the player win and
//the players numbers and the numbers called are presented on the console
function main(){
    const player1 = generatingBingoCards();
    do{
        let num = callingBingoNumbers(1,75,numbersCalled);
    }while(!(checkingBingoCards(player1, numbersCalled)));
    console.log(player1);
    console.log(numbersCalled);
}
//Main execution
main();