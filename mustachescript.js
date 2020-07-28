let portfolioData = [
    {
        name: "Borum Jot",
        category: "Personal",
        status: "Planning",
        borumProduct: true,
        link: "http://jot.bforborum.com",
        img: "http://jot.bforborum.com/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['Java', 'XML', 'PHP'],
            apis: ['Android'],
        },
        years: "2020"
    },
    {
        name: "Borum Farms",
        category: "Personal",
        status: "Current",
        borumProduct: true,
        link: "https://github.com/Borumer/BorumFarms",
        img: "https://raw.githubusercontent.com/Borumer/BorumFarms/master/images/whitelogo.jpg",
        softwareDevelopmentTools: {
            languages: ['Java'],
            frameworks: ['Swing'],
        },
        years: "2020-Present"
    },
    {
        name: "EcoFriend",
        category: "Hackathon",
        status: "Ended",
        link: "https://devpost.com/software/enviroshare",
        img: "https://raw.githubusercontent.com/Borumer/EcoFriend/master/assets/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['Dart'],
            apis: ['Flutter']
        },
        years: "2020",
    },
    {
        name: "FarmaKarma",
        category: "Hackathon",
        status: "Ended",
        link: "https://devpost.com/software/FarmaKarma",
        img: "https://cdn.glitch.com/abf7c191-9bf8-48f2-a97c-4ade2e75e824%2Fimg_typo.jpg?v=1594932645362",
        softwareDevelopmentTools: {
            languages: ['JavaScript', 'HTML', 'CSS'],
            libraries: ['csvtojson', 'axios'],
            apis: ['USDA API'],
            frameworks: ['Express'],
            serverEnvironment: 'NodeJS'
        },
        years: "2020",
    },
    {
        name: "Chatfish",
        category: "Personal",
        status: "Planning",
        borumProduct: true,
        link: "http://chat.bforborum.com",
        img: "https://raw.githubusercontent.com/Borumer/Chatfish/master/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['C#', 'XAML'],
            frameworks: ['.NET', 'WPF'],
        }
    },
    {
        name: "Flytrap",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
        link: "http://audio.bforborum.com",
        img: "https://raw.githubusercontent.com/Borumer/Flytrap/master/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQL'],
        },
        years: "2020"
    },
    {
        name: "Borum Paint",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
        link: "http://paint.bforborum.com",
        img: "https://raw.githubusercontent.com/Borumer/BorumPaint/master/paint-pallete.png",
        softwareDevelopmentTools: {
            languages: ['Processing', 'JavaScript', 'HTML'],
            library: ['p5.js'],
        }
    },
    {
        name: "Library System",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "https://library-management-system.glitch.me/",
        img: "https://cdn.glitch.com/65f2c798-3d83-4eea-9b3c-130c150e928b%2Flmsicon.png?v=1594941302927",
        softwareDevelopmentTools: {
            languages: ['C#']
        },
        years: "2019"
    },
    {
        name: "Frequency Analysis Simulator",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/Frequency-Analysis-Simulator",
        img: "https://raw.githubusercontent.com/Borumer/Frequency-Analysis-Simulator/master/icon.ico",
        softwareDevelopmentTools: {
            languages: ['Java'],
            libraries: ['extJWNL'],
            apis: ['WordNet']
        },
        years: "2019-2020"
    },
    {
        name: "Borum Restaurants",
        category: "Tutorial",
        status: "Ended",
        borumProduct: true,
        link: "http://restaurants.bforborum.com",
        img: "http://restaurants.bforborum.com/favicon.ico",
        softwareDevelopmentTools: {
            languages: ['JavaScript'],
            libraries: ['React']
        }
    },
    {
        name: "Borum Feasts",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
        link: "http://feasts.bforborum.com",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Cheese_and_Pepperoni_Pizza_%284825046245%29.jpg",
        softwareDevelopmentTools: {
            languages: ['HTML', 'CSS', 'JavaScript'],
        }
    },
    {
        name: "Supreme Guacamole",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/supreme-guacamole/",
        img: "https://borumer.github.io/supreme-guacamole/images/icon.ico",
        softwareDevelopmentTools: {
            languages: ['HTML', 'Java', 'JavaScript', 'Processing'],
            libraries: ['Handlebars', 'LoDash']
        }
    },
    {
        name: "Dasmoto's Arts and Crafts",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/Dasmotos-Arts-and-Crafts/",
        img: "https://borumer.github.io/Dasmotos-Arts-and-Crafts/icon.ico",
        softwareDevelopmentTools: {
            languages: ['HTML', 'CSS']
        }
    },
    {
        name: "Text Adventure",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/text-adventure",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Terminalicon2.png/512px-Terminalicon2.png",
        softwareDevelopmentTools: {
            languages: ['Java']
        },
        years: "2017-2018"
    },
    {
        name: "Crystalite",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
        link: "https://borumer.github.io/Crystalite/"
    },
    {
        name: "Guessing Game",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
    },
    {
        name: "Borum Q&A",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
        link: "http://www.bforborum.com",
        img: "http://cdn.bforborum.com/images/icon.png",
        softwareDevelopmentTools: {
            languages: ['PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
            frameworks: ['Bootstrap'],
            libraries: ['jQuery']
        },
        years: "2018-2020"
    },
];

portfolioData = portfolioData.filter(el => el.category !== "Tutorial");

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

let skillData = []
    .concat
    .apply( // Converts 2-D to 1-D array
        [], 
        portfolioData
            .map(el => []
                .concat
                .apply( // Converts 2-D to 1-D array
                    [], 
                    Object.values(el.softwareDevelopmentTools) // Merges different types of tools
                )
            )
    ).unique(); // Removes duplicates

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

const projects = `<h2>Projects</h2>
<ul class = 'd-flex p-2 flex-wrap project-list'>
{{#each portfolioData}}
{{#ifCond category "Tutorial"}}
{{else}}
<li style="z-index:calc({{../portfolioData.length}} - {{@index}} + 1)" id="project-{{removeSpaces name}}" class = "flip-container" ontouchstart="toggleHover(this)" onclick="toggleHover(this)">
    <div class = "flipper">
        <div class = "front">{{> cardFront}}</div>
        <div class = "back">{{> cardBack}}</div>
    </div>
    <p class="tooltip">{{> backTitle}}</p>
</li>
{{/ifCond}}
{{/each}}
</ul>`;

const skills = `<h2>Skills</h2>
<ul class = 'skills-stack'>
{{#each skillData}}
<li id="skill-{{@index}}">{{this}}</li>
{{/each}}
</ul>`;

function displayContent() {
    // compile the template
    const template = Handlebars.compile(projects.concat(skills));
    const mainContent = document.getElementById('main-content');
    const templatedLayout = template({ portfolioData, skillData });
    mainContent.innerHTML = templatedLayout;
}

// execute the compiled template and print the output to the console
displayContent();


