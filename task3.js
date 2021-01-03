var a = 4;
if (++a === 5){
    alert ("given condition for variable a is true");
    //OUTPT WILL BE DISPLAYED AS CONDITION IS TRUE
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
    //OUTPT WILL NOT BE DISPLAYED AS CONDITION IS FALSE

}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
    //OUTPT WILL NOT BE DISPLAYED AS CONDITION IS FALSE

}
if (c === 13){
alert("condition 2 is true");
    //OUTPT WILL BE DISPLAYED AS CONDITION IS TRUE

}
if (++c < 14){
alert("condition 3 is true");
    //OUTPT WILL NOT BE DISPLAYED AS CONDITION IS FALSE

}
if(c === 14){
alert("condition 4 is true");
    //OUTPT WILL BE DISPLAYED AS CONDITION IS TRUE

}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
    //OUTPT WILL BE DISPLAYED AS CONDITION IS TRUE

}

if (true){

alert("True");
    //OUTPT WILL BE DISPLAYED AS last CONDITION IS TRUE

}
if (false){
alert("False");
    //OUTPT WILL NOT BE DISPLAYED AS CONDITION IS FALSE

}
if("car" < "cat"){

alert("car is smaller than cat");
    //OUTPT WILL BE DISPLAYED AS CONDITION IS TRUE

}