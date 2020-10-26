// Execute the compiled template and print the output to the console
displayContent();

async function getProjectData() {
    const response = await fetch('https://borumer.github.io/data/projectdata.json');
    if (response.status == 200) {
        let {projectData} = await response.json();
        projectData = projectData.filter(el => el.category !== "Tutorial");
        return projectData
    }
}

async function getSkillData() {
    const projectData = await getProjectData();
    return []
        .concat
        .apply( // Converts 2-D to 1-D array
            [], 
            projectData
                .map(el => []
                    .concat
                    .apply( // Converts 2-D to 1-D array
                        [], 
                        Object.values(el.softwareDevelopmentTools) // Merges different types of tools
                    )
                )
        ).unique(); // Removes duplicates
}

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};


Handlebars.registerPartial('cardBack', `
<p>{{name}} ({{category}})</p>
{{#if status}}
<p>Status: {{status}}</p>
{{#if borumProduct}}
<img src='http://cdn.bforborum.com/images/icon.png' style='width:100%; background: none; display:block; height:20px'>
{{/if}}
<a onclick="event.stopPropagation()" target="_blank" href="{{link}}">View</a>
{{/if}}
`);

Handlebars.registerPartial('cardFront', `
<p>{{name}}</p>
{{#if img}}
<img src = '{{img}}'>
{{/if}}
`);

Handlebars.registerPartial('backTitle',
`Made with {{softwareDevelopmentTools.languages}}
{{writeOtherTools "APIs" softwareDevelopmentTools.apis}}<br>
{{writeOtherTools "Libraries" softwareDevelopmentTools.libraries}}<br>
{{writeOtherTools "Frameworks" softwareDevelopmentTools.frameworks}}<br>
`)

// Removes spaces to make id and class names valid
Handlebars.registerHelper('removeSpaces', function (value) {
    return value.replace(" ", "");
})

Handlebars.registerHelper('writeOtherTools', function (name, arr) {
    if (arr) 
        return `Utilizing the following ${name}: ${arr}`;
})

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

function toggleHover(el) {
    el.classList.toggle('hover');
}

function getSkillsHtml() {
    return `<div id="Skills"><h2>Skills</h2>
        <ul class = 'skills-stack'>
        {{#each skillData}}
        <li id="skill-{{@index}}">{{this}}</li>
        {{/each}}
        </ul></div>`;
}

function getProjectsHtml() {
    return `<div id="Projects"><h2>Projects</h2>
        <ul class = 'd-flex p-2 flex-wrap project-list'>
        {{#each projectData}}
        {{#ifCond category "Tutorial"}}
        {{else}}
        <li style="z-index:calc({{../projectData.length}} - {{@index}} + 1)" id="project-{{removeSpaces name}}" class = "flip-container" ontouchstart="toggleHover(this)" onclick="toggleHover(this)">
            <div class = "flipper">
                <div class = "front">{{> cardFront}}</div>
                <div class = "back">{{> cardBack}}</div>
            </div>
            <p class="tooltip">{{> backTitle}}</p>
        </li>
        {{/ifCond}}
        {{/each}}
        </ul></div>`;
}

async function displayContent() {
    const projectsContainer = await getProjectsHtml();
    const skillsContainer = await getSkillsHtml();
    // Compile the template
    const template = Handlebars.compile(projectsContainer.concat(skillsContainer));
    const mainContent = document.getElementById('main-content');
    const templatedLayout = template({ 
        projectData: (await getProjectData()).slice(0, 13), 
        skillData: await getSkillData() 
    });
    mainContent.innerHTML = templatedLayout;
}



