var marksEng;
var marksUrdu;
var marksScience;
var totalMarks;
var grade;
var remarks;
marksEng = prompt("Enter the marks of English");
marksEng = Number(marksEng);
marksUrdu = prompt("Enter the marks of Urdu");
marksUrdu = Number(marksUrdu);
marksScience = prompt(" Enter the marks of Science");
marksScience = Number(marksScience);
totalMarks = prompt("Enter total marks");
totalMarks = Number(totalMarks);
var marksObtained = marksScience + marksEng + marksUrdu;
var percentage = (marksObtained / 300) * 100;
percentage = percentage.toFixed(0);
//alert("Percentage = " + percentage);
if (percentage >=80){
    grade = "A-ONE";
    remarks = "Excellent";
    }
    else if (percentage < 80 && percentage >= 70){
        grade = "A";
        remarks = "Good";
    }
    else if (percentage < 70 && percentage >= 60){
        grade = "B ";
        remarks = "You need to improve";
     }
     else if (percentage < 60){
         grade = " Fail";
         remarks = "Sorry";

     }
  
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks =   ", totalMarks);
document.write("<br>Marks obtained :  ",marksObtained);
document.write("<br>Percentage :   ", percentage + "%");
document.write("<br>Grade :   ",grade);
document.write("<br>Remarks :   ", remarks);