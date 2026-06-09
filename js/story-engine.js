const scenarioTemplates = [

{
title:"Team Confidence Challenge",
dimension:"trust",
story:"A stakeholder questions capability."
},

{
title:"Priority Conflict",
dimension:"conflict",
story:"Senior leaders disagree."
},

{
title:"Decision Point",
dimension:"commitment",
story:"A critical decision is needed."
},

{
title:"Execution Risk",
dimension:"accountability",
story:"A milestone is missed."
},

{
title:"Outcome Review",
dimension:"results",
story:"Performance metrics decline."
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
