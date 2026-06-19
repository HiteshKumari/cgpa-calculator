const gradePoints = {
"A+":10,
"A":9,
"B+":8,
"B":7,
"C+":6,
"C":5,
"D":4,
"F":0,
"I":0
};

function addSubject(){

let div=document.createElement("div");

div.className="subject";

div.innerHTML=`
<input type="text" class="subjectName" placeholder="Subject Name">

<input type="number" class="credit" placeholder="Credits">

<select class="grade">
<option>A+</option>
<option>A</option>
<option>B+</option>
<option>B</option>
<option>C+</option>
<option>C</option>
<option>D</option>
<option>F</option>
<option>I</option>
</select>
`;

document.getElementById("subjects").appendChild(div);
}

function calculateCGPA(){

let name=document.getElementById("studentName").value;

let credits=document.querySelectorAll(".credit");
let grades=document.querySelectorAll(".grade");

let totalCredits=0;
let totalPoints=0;

for(let i=0;i<credits.length;i++){

let credit=parseFloat(credits[i].value)||0;
let grade=grades[i].value;

totalCredits+=credit;
totalPoints+=credit*gradePoints[grade];
}

if(totalCredits===0){
alert("Enter subject details");
return;
}

let cgpa=(totalPoints/totalCredits).toFixed(2);

let emoji="🙂";

if(cgpa>=9)
emoji="🏆🔥";

else if(cgpa>=8)
emoji="🎉😁";

else if(cgpa>=7)
emoji="😊";

else if(cgpa>=6)
emoji="😐";

else
emoji="😔";

document.getElementById("result").innerHTML=
`
<h2>${name}</h2>
🎓 CGPA: ${cgpa}<br>
${emoji}
`;
}

addSubject();