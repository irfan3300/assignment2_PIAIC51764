var password = "Bingo";
var pass1;
var pass2;
pass1 = prompt(" Enter your password");
pass2 = pass1.length;
if (pass2 === 0){
    alert("Please enter your password");
    pass1 = prompt(" Enter your password");

}
if (pass1 === password){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}