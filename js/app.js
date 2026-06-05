let currentQuestion = 0;
let selectedStory = [];
let scores = {

trust:0,
conflict:0,
commitment:0,
accountability:0,
results:0

};

const questions = [

{
type:"trust",
title:"Leadership Crisis",
text:"A respected team member admits a major mistake that may delay delivery.",
options:[
{text:"Encourage open discussion and collaborative problem solving",score:2},
{text:"Privately investigate before responding",score:1},
{text:"Escalate immediately to leadership",score:0},
{text:"Avoid discussion and move forward",score:-1}
]
},

{
type:"conflict",
title:"Priority Disagreement",
text:"Two senior leaders strongly disagree on project priorities.",
options:[
{text:"Facilitate a structured debate",score:2},
{text:"Seek additional information",score:1},
{text:"Allow leadership to decide",score:0},
{text:"Avoid confrontation",score:-1}
]
},

{
type:"commitment",
title:"Critical Decision",
text:"The team must make a decision within 24 hours.",
options:[
{text:"Gain alignment and commit",score:2},
{text:"Request clarification",score:1},
{text:"Delay decision",score:0},
{text:"Avoid ownership",score:-1}
]
}

];

function populateFunctions(){

const dropdown =
document.getElementById("jobFunction");

dropdown.innerHTML =
'<option value="">Select Job Function</option>';

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
.value
.trim();

const regex =
/^[A-Za-z]{2,}\s+[A-Za-z]{2,}.*$/;

if(!regex.test(name)){

alert(
"Please enter First Name and Last Name."
);

return;

}

const jobFunction =
document.getElementById("jobFunction").value;
const assignedArc =
Math.random() < 0.5
? "ArcA"
: "ArcB";

selectedStory =
stories[jobFunction][assignedArc];
  
const jobFamily =
document.getElementById("jobFamily").value;

if(!jobFunction){

alert("Please select Job Function");

return;

}

if(!jobFamily){

alert("Please select Job Family");

return;

}

document.getElementById("landingPage")
.style.display="none";

document.getElementById("storyTiles")
.classList.remove("hidden");

document.getElementById("simulation")
.classList.remove("hidden");

loadQuestion();

}

function loadQuestion(){

const current =
selectedStory[currentQuestion];

document.getElementById("questionTitle")
.innerText =
current.title;

document.getElementById("questionText")
.innerText =
current.text;

document.getElementById("tracker")
.innerText =
currentQuestion + 1;

const optionsContainer =
document.getElementById("options");

optionsContainer.innerHTML = "";

current.options.forEach(option=>{

const button =
document.createElement("button");

button.className =
"option-btn";

button.innerText =
option.text;

button.onclick = () =>
answer(option.score);

optionsContainer.appendChild(button);

});

}

function answer(score){

const category =
questions[currentQuestion].type;

scores[category] += score;

currentQuestion++;

if(currentQuestion >= questions.length){

showResults();

return;

}

loadQuestion();

}

function showResults(){

document.getElementById("simulation")
.innerHTML = `

<h2 class="text-4xl font-bold mb-6">
Assessment Complete
</h2>

<p class="mb-2">Trust: ${scores.trust}</p>

<p class="mb-2">Conflict: ${scores.conflict}</p>

<p class="mb-2">Commitment: ${scores.commitment}</p>

<p class="mb-2">Accountability: ${scores.accountability}</p>

<p class="mb-2">Results: ${scores.results}</p>

`;

}

window.onload = function(){

populateFunctions();

};
