const scenarioTemplates = [

{
title:"Team Confidence Challenge",
story:"A key stakeholder questions the team's capability to deliver a critical initiative."
},

{
title:"Priority Conflict",
story:"Senior leaders disagree on the direction of the project."
},

{
title:"Decision Point",
story:"The team must commit to a high-impact decision with limited information."
},

{
title:"Execution Risk",
story:"A major milestone has been missed and leadership wants answers."
},

{
title:"Outcome Review",
story:"Performance results are below expectations and corrective action is required."
}

];

const jobContexts = {

"Human Resources":{
mission:"Workforce Transformation",
stakeholder:"CHRO",
asset:"Employee Experience"
},

"Information Technology":{
mission:"Digital Transformation",
stakeholder:"CIO",
asset:"Technology Platform"
},

"Sales":{
mission:"Revenue Growth",
stakeholder:"Chief Revenue Officer",
asset:"Strategic Account"
},

"Finance & Accounting":{
mission:"Financial Performance",
stakeholder:"CFO",
asset:"Budget"
}

};

function generateStory(jobFunction){

const context =
jobContexts[jobFunction] ||
jobContexts["Human Resources"];

return scenarioTemplates.map(template => {

return {

title:template.title,

text:
template.story +
"\n\nMission: " +
context.mission +
"\nStakeholder: " +
context.stakeholder +
"\nAsset: " +
context.asset

};

});

}
