const scenarioTemplates = [

{
category:"trust",
title:"Team Confidence Challenge",
story:"A key stakeholder questions the team's capability to deliver a critical initiative."
},

{
category:"conflict",
title:"Priority Conflict",
story:"Senior leaders disagree on the direction of the project."
},

{
category:"commitment",
title:"Decision Point",
story:"The team must commit to a high-impact decision with limited information."
},

{
category:"accountability",
title:"Execution Risk",
story:"A major milestone has been missed and leadership wants answers."
},

{
category:"results",
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

},

"Product Management":{

mission:"Product Launch",

stakeholder:"Chief Product Officer",

asset:"Roadmap"

}

};

function generateStory(jobFunction){

const context =
jobContexts[jobFunction] ||
jobContexts["Human Resources"];

return scenarioTemplates.map(template => {

return {

category:template.category,

title:template.title,

text:

template.story +

" The mission is " +

context.mission +

". The primary stakeholder is the " +

context.stakeholder +

". The impacted area is " +

context.asset +

"."

};

});

}
