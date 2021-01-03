var secretNum = 8 ;
var num = prompt("Guess the secret number (0 - 10)");
num = Number(num);
if (num === secretNum){
    alert("Bingo! Correct Answer");
}
else if (num === secretNum + 1){
    alert ("Close enough to the Correct answer");
}