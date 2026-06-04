let currentQuestion = 0;

const questions = [

"Trust: A team member admits a mistake.",
"Conflict: Two leaders disagree.",
"Trust: Stakeholders challenge capability.",
"Commitment: A critical decision is needed.",
"Conflict: Planning discussions escalate.",

"Accountability: A deadline is missed.",
"Trust: A colleague requests help.",
"Commitment: Leadership seeks alignment.",
"Results: Metrics are declining.",
"Conflict: Resource allocation dispute.",

"Accountability: Expectations are missed.",
"Results: Team goals diverge.",
"Trust: Feedback is requested.",
"Commitment: Change is proposed.",
"Results: Outcomes are reviewed."

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
document.getElementById("jobFunction")
.value;

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

const regex =
/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/;

if(!regex.test(name)){

alert(
"Enter first and last name."
);

return;

}

document
.getElementById("landingPage")
.style.display =
"none";

document
.getElementById("simulation")
.classList
.remove("hidden");

currentQuestion = 0;

loadQuestion();

}

function loadQuestion(){

document
.getElementById("questionTitle")
.innerText =
"Scenario " + (currentQuestion+1);

document
.getElementById("questionText")
.innerText =
questions[currentQuestion];

document
.getElementById("tracker")
.innerText =
currentQuestion+1;

}

function answer(){

currentQuestion++;

if(currentQuestion >= questions.length){

alert(
"Assessment Complete"
);

return;

}

loadQuestion();

}

window.onload = function(){

populateFunctions();

};
