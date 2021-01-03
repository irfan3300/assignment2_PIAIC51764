var num1;
var num2;
var operand;
var result;
num1 = prompt("Enter first number");
num2 = prompt("Enter second number");
operand = prompt("Enter operand  + , - , * , / , % (mod)");
num1 = Number(num1);
num2 = Number(num2);
if (operand === "+"){
    result = num1 + num2;
    alert ("The sum of " + num1 + " and  "+ num2  +  " is  " + result);
}
else if (operand === "-"){
    result = num1 - num2;
    alert ("The result of " + num1 + "  -  "+ num2  +  " is  " + result);

}
else if (operand === "*"){
    result = num1 * num2;
    alert ("The result of " + num1 + "  *  "+ num2  +  " is  " + result);

}
else if (operand === "/"){
    result = num1 / num2;
    alert ("The result of " + num1 + "  /  "+ num2  +  " is  " + result);

}
else if (operand === "%"){
    result = num1 % num2;
    alert ("The result of " + num1 + "  mod  "+ num2  +  " is  " + result);

}