// Execute the compiled template and print the output to the console
displayContent();

function getSkillData() {
	return [].concat
		.apply(
			// Converts 2-D to 1-D array
			[],
			projectData.map((el) =>
				[].concat.apply(
					// Converts 2-D to 1-D array
					[],
					Object.values(el.softwareDevelopmentTools) // Merges different types of tools
				)
			)
		)
		.unique(); // Removes duplicates
}



function toggleHover(el) {
	el.classList.toggle("hover");
}

function getSkillsHtml() {
	return `<div id="Skills"><h2>Skills</h2>
        <ul class = 'skills-stack'>
        {{#each skillData}}
        <li id="skill-{{@index}}">{{this}}</li>
        {{/each}}
        </ul></div>`;
}

function getWorkHtml() {
	return `<div id="Work"><h2>Work</h2>
        <ul class = 'd-flex p-2 flex-wrap project-list'>
        {{#each projectData}}
        {{#ifCond category "Tutorial"}}
        {{else}}
        <li id="project-{{removeSpaces name}}">
            {{> cardFront}}
        </li>
        {{/ifCond}}
        {{/each}}
        </ul></div>`;
}

async function displayContent() {
	const projectTemplate = Handlebars.templates.Work;
	const projectTemplateLayout = projectTemplate({
		projectData: projectData.slice(0, 10),
	});

	const skillsTemplate = Handlebars.templates.skills;
	const skillTemplateLayout = skillsTemplate({
		skillData: await getSkillData(),
	});

	// Compile the template
	const mainContent = document.getElementById("main-content");
	mainContent.innerHTML += projectTemplateLayout.concat(skillTemplateLayout);
}
