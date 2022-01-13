//Check if it is Winner
function checkingBingoCards(bingoCard, numbersCalled){
    numbersCalled.push("FREE");
    return bingoCard.every(element => numbersCalled.indexOf(element) > -1);
}
export { checkingBingoCards};