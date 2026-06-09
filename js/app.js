let currentQuestion = 0;

let storyData = [];

let answers = [];

let scores = {
trust:0,
conflict:0,
commitment:0,
accountability:0,
results:0
};

/* -------------------------
Job Functions
-------------------------- */

function populateFunctions(){

```
const dropdown =
document.getElementById("jobFunction");

dropdown.innerHTML =
'<option value="">Select Job Function</option>';

Object.keys(jobFunctions).forEach(func => {

    const option =
    document.createElement("option");

    option.value = func;
    option.textContent = func;

    dropdown.appendChild(option);

});
```

}

/* -------------------------
Job Families
-------------------------- */

function populateFamilies(){

```
const func =
document.getElementById("jobFunction").value;

const familyDropdown =
document.getElementById("jobFamily");

familyDropdown.innerHTML =
'<option value="">Select Job Family</option>';

if(!func) return;

jobFunctions[func].forEach(family => {

    const option =
    document.createElement("option");

    option.value = family;
    option.textContent = family;

    familyDropdown.appendChild(option);

});
```

}

/* -------------------------
Start Assessment
-------------------------- */

function startSimulation(){

```
const name =
document.getElementById("name")
.value
.trim();

if(name.length < 2){

    alert(
    "Please enter at least your first name."
    );

    return;

}

const jobFunction =
document.getElementById("jobFunction")
.value;

if(!jobFunction){

    alert(
    "Please select a Job Function."
    );

    return;

}

storyData =
generateStory(jobFunction);

currentQuestion = 0;

answers = [];

scores = {
    trust:0,
    conflict:0,
    commitment:0,
    accountability:0,
    results:0
};

document
.getElementById("landingPage")
.style.display = "none";

document
.getElementById("simulation")
.classList.remove("hidden");

loadQuestion();
```

}

/* -------------------------
Load Question
-------------------------- */

function loadQuestion(){

```
const scenario =
storyData[currentQuestion];

document
.getElementById("questionTitle")
.innerText =
scenario.title;

document
.getElementById("questionText")
.innerText =
scenario.text;

document
.getElementById("questionCounter")
.innerText =
"Question " +
(currentQuestion + 1) +
" of " +
storyData.length;

const percent =
Math.round(
((currentQuestion + 1)
/
storyData.length)
* 100
);

document
.getElementById("progressText")
.innerText =
percent + "%";

document
.getElementById("progressBar")
.style.width =
percent + "%";

document
.getElementById("options")
.innerHTML = `

<button class="option-btn" onclick="selectOption(3,this)">
Strongly Effective Response
</button>

<button class="option-btn" onclick="selectOption(2,this)">
Moderately Effective Response
</button>

<button class="option-btn" onclick="selectOption(1,this)">
Ineffective Response
</button>

`;
```

}

/* -------------------------
Select Option
-------------------------- */

function selectOption(score, button){

```
answers[currentQuestion] = score;

const buttons =
document.querySelectorAll(
"#options button"
);

buttons.forEach(btn => {

    btn.style.background =
    "#1e293b";

});

button.style.background =
"#2563eb";
```

}

/* -------------------------
Next Question
-------------------------- */

function nextQuestion(){

```
if(
answers[currentQuestion]
=== undefined
){

    alert(
    "Please select an option before continuing."
    );

    return;

}

const dimension =
storyData[currentQuestion]
.dimension;

scores[dimension] +=
answers[currentQuestion];

if(
currentQuestion <
storyData.length - 1
){

    currentQuestion++;

    loadQuestion();

}
else{

    finishAssessment();

}
```

}

/* -------------------------
Previous Question
-------------------------- */

function previousQuestion(){

```
if(currentQuestion > 0){

    currentQuestion--;

    loadQuestion();

}
```

}

/* -------------------------
Finish Assessment
-------------------------- */

function finishAssessment(){

```
const total =
scores.trust +
scores.conflict +
scores.commitment +
scores.accountability +
scores.results;

const maxScore =
storyData.length * 3;

const percentage =
Math.round(
(total / maxScore)
* 100
);

let profile;

if(percentage >= 85){

    profile =
    "High Performing Team Builder";

}
else if(percentage >= 70){

    profile =
    "Collaborative Leader";

}
else if(percentage >= 50){

    profile =
    "Developing Team Leader";

}
else{

    profile =
    "Team Dysfunction Risk";

}

alert(

"Assessment Complete\n\n" +

"Trust: " +
scores.trust + "\n" +

"Conflict: " +
scores.conflict + "\n" +

"Commitment: " +
scores.commitment + "\n" +

"Accountability: " +
scores.accountability + "\n" +

"Results: " +
scores.results + "\n\n" +

"Team Health: " +
percentage + "%\n\n" +

"Profile: " +
profile

);
```

}

/* -------------------------
Page Load
-------------------------- */

window.onload = function(){

```
populateFunctions();
```

};
