let currentQuestion = 0;

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
text:"A respected team member admits a major mistake that may delay delivery."
},

{
type:"conflict",
title:"Escalation",
text:"Two senior leaders disagree publicly about priorities."
},

{
type:"trust",
title:"Stakeholder Pressure",
text:"An executive questions the team's capability."
},

{
type:"commitment",
title:"Critical Decision",
text:"A decision must be made within 24 hours."
},

{
type:"conflict",
title:"Planning Breakdown",
text:"The planning workshop becomes tense."
},

{
type:"accountability",
title:"Missed Deadline",
text:"A key milestone is missed."
},

{
type:"trust",
title:"Support Request",
text:"A team member asks for help publicly."
},

{
type:"commitment",
title:"Alignment Meeting",
text:"Leadership requests final commitment."
},

{
type:"results",
title:"Performance Dip",
text:"Performance indicators begin falling."
},

{
type:"conflict",
title:"Resource Battle",
text:"Teams compete for limited resources."
},

{
type:"accountability",
title:"Repeated Failure",
text:"One contributor continues missing expectations."
},

{
type:"results",
title:"Goal Drift",
text:"Personal objectives begin replacing team goals."
},

{
type:"trust",
title:"Feedback Round",
text:"Honest feedback is requested."
},

{
type:"commitment",
title:"Transformation Change",
text:"A difficult change initiative is proposed."
},

{
type:"results",
title:"Final Review",
text:"Project outcomes are reviewed by leadership."
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
document.getElementById("jobFunction")
.value;

const jobFamily =
document.getElementById("jobFamily")
.value;

if(!jobFunction){

alert(
"Please select Job Function"
);

return;

}

if(!jobFamily){

alert(
"Please select Job Family"
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
  
document
.getElementById("storyTiles")
.classList
.remove("hidden");
  
window.scrollTo({
top:0,
behavior:"smooth"
});

currentQuestion = 0;

loadQuestion();

}

function loadQuestion(){

const current =
questions[currentQuestion];

document
.getElementById("questionTitle")
.innerText =
current.title;

document
.getElementById("questionText")
.innerText =
current.text;

document
.getElementById("tracker")
.innerText =
(currentQuestion + 1);

updateStoryTiles();

}

function answer(choice){

const category =
questions[currentQuestion]
.type;

if(choice==="positive"){

scores[category]+=2;

}
else if(choice==="neutral"){

scores[category]+=1;

}

currentQuestion++;

if(currentQuestion >= questions.length){

showResults();

return;

}

loadQuestion();

}

function showResults(){

const report =

"Trust: " + scores.trust + "\n" +
"Conflict: " + scores.conflict + "\n" +
"Commitment: " + scores.commitment + "\n" +
"Accountability: " + scores.accountability + "\n" +
"Results: " + scores.results;

alert(report);

}

function updateStoryTiles(){

const tiles =
document.querySelectorAll(".story-tile");

tiles.forEach((tile,index)=>{

tile.classList.remove(
"active-tile"
);

if(index===currentQuestion){

tile.classList.add(
"active-tile"
);

}

});

}

window.onload = function(){

populateFunctions();

};
