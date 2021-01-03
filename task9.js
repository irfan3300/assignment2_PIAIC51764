var char;
char = prompt(" Enter any character");
char = char.toLowerCase();
if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    alert(char + " is vowel");

}
else
{
    alert(char + " is not vowel");
}