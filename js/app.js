let currentQuestion = 0;

let answers = [];

const questions = [

"Question 1",
"Question 2",
"Question 3",
"Question 4",
"Question 5",

"Question 6",
"Question 7",
"Question 8",
"Question 9",
"Question 10",

"Question 11",
"Question 12",
"Question 13",
"Question 14",
"Question 15"

];

function populateFunctions(){

const dropdown =
document.getElementById("jobFunction");

Object.keys(jobFunctions)
.forEach(func=>{

const option =
document.createElement("option");

option.value = func;
option.textContent = func;

dropdown.appendChild(option);

});

}

function populateFamilies(){

const func =
document.getElementById("jobFunction").value;

const familyDropdown =
document.getElementById("jobFamily");

familyDropdown.innerHTML =
'<option value="">Select Job Family</option>';

if(!func) return;

jobFunctions[func]
.forEach(family=>{

const option =
document.createElement("option");

option.value = family;
option.textContent = family;

familyDropdown.appendChild(option);

});

}

function startSimulation(){

const name =
document.getElementById("name")
.value.trim();

if(name.length < 2){

alert("Enter your first name.");

return;

}

document
.getElementById("landingPage")
.classList.add("hidden");

document
.getElementById("simulation")
.classList.remove("hidden");

loadQuestion();

}

function loadQuestion(){

document
.getElementById("questionTitle")
.innerText =
"Scenario " +
(currentQuestion + 1);

document
.getElementById("questionText")
.innerText =
questions[currentQuestion];

document
.getElementById("options")
.innerHTML = `

<button class="option"
onclick="selectOption(3)">
Strong Response
</button>

<button class="option"
onclick="selectOption(2)">
Moderate Response
</button>

<button class="option"
onclick="selectOption(1)">
Weak Response
</button>

`;

}

function selectOption(score){

answers[currentQuestion] =
score;

}

function nextQuestion(){

if(
answers[currentQuestion]
=== undefined
){

alert(
"Select an answer."
);

return;

}

if(
currentQuestion <
questions.length - 1
){

currentQuestion++;

loadQuestion();

}
else{

finishAssessment();

}

}

function previousQuestion(){

if(currentQuestion > 0){

currentQuestion--;

loadQuestion();

}

}

function finishAssessment(){

let total = 0;

answers.forEach(score=>{

total += score;

});

alert(
"Assessment Complete\n\nScore: "
+ total
);

}

window.onload = function(){

populateFunctions();

};
