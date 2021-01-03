var signalColor;
 signalColor =  prompt(" What is the color of signal ?");
 //signalColor = signalColor.toUpperCase();
if (signalColor=== "Red"){
    alert("Must Stop");
}
else if (signalColor === "Yellow"){
    alert ("Ready to Move");
}
else if (signalColor === "Green"){
    alert("Move now");
}