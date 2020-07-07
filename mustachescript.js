const portfolioData = [
    {
        name: "Borum Farms",
        category: "Personal",
        status: "Current",
        borumProduct: true,
        link: "https://github.com/Borumer/BorumFarms",
        img: "https://raw.githubusercontent.com/Borumer/BorumFarms/master/images/whitelogo.jpg"
    },
    {
        name: "EcoFriend",
        category: "Hackathon",
        status: "Ended",
        link: "",
        img: "https://raw.githubusercontent.com/Borumer/EcoFriend/master/assets/images/icon.png"
    },
    {
        name: "FarmaKarma",
        category: "Hackathon",
        status: "Current",
        link: "",
        img: "https://raw.githubusercontent.com/Borumer/FarmaKarma/master/img_typo.jpg"
    },
    {
        name: "Chatfish",
        category: "Personal",
        status: "Future",
        borumProduct: true,
        img: "https://raw.githubusercontent.com/Borumer/Chatfish/master/images/icon.png"
    },
    {
        name: "Flytrap",
        category: "Personal",
        status: "Current",
        borumProduct: true,
        img: "https://raw.githubusercontent.com/Borumer/Flytrap/master/images/icon.png",
    },
    {
        name: "Borum Paint",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
        link: "",
        img: "https://raw.githubusercontent.com/Borumer/BorumPaint/master/paint-pallete.png"
    },
    {
        name: "Library System",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "",
        img: "https://raw.githubusercontent.com/Borumer/Library_System/master/icon.png"
    },
    {
        name: "Frequency Analysis Simulator",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
        link: "",
        img: "https://raw.githubusercontent.com/Borumer/Frequency-Analysis-Simulator/master/icon.ico"
    },
    {
        name: "Borum Restaurants",
        category: "Tutorial",
        status: "Ended",
        borumProduct: true,
    },
    {
        name: "Borum Feasts",
        category: "Personal",
        status: "Ended",
        borumProduct: true,
    },
    {
        name: "Supreme Guacamole",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
    },
    {
        name: "Dasmoto's Arts and Crafts",
        category: "Tutorial",
        status: "Ended",
        borumProduct: false,
    },
    {
        name: "Text Adventure",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
    },
    {
        name: "Crystalite",
        category: "Personal",
        status: "Ended",
        borumProduct: false,
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
    },
    {
        name: "JIC Documentation",
        category: "Others",
        status: "Ended",
        borumProduct: false
    }
];


Handlebars.registerPartial('cardBack', `
<p>{{name}} ({{category}})</p>
{{#if status}}
<p>Status: {{status}}</p>
{{#if borumProduct}}
<img src='http://cdn.bforborum.com/images/icon.png' style='width:100%; background: none; display:block; height:20px'>
{{/if}}
<a target="_blank" href="{{link}}">View</a>
{{/if}}
`);

Handlebars.registerPartial('cardFront', `
<p>{{name}}</p>
{{#if img}}
<img src = '{{img}}'>
{{/if}}
`);

let compileHandlebarsWithCurrentItem = (el, ind, partial) => {
    el.innerHTML = Handlebars.compile(`{{> ${partial} }}`)(portfolioData[ind]);
};

function displayInfo(el, ind, event) {
    event.stopPropagation();
    el.classList.toggle('show-info');

    let compile = function (partial) {
        compileHandlebarsWithCurrentItem(el, ind, partial)
    };

    compile(el.classList.contains('show-info') ? 'cardBack' : 'cardFront')
}

// Removes spaces to make id and class names valid
Handlebars.registerHelper('removeSpaces', function (value) {
    return value.replace(" ", "");
})

// compile the template
var template = Handlebars.compile(
    `<ul class = 'd-flex p-2 flex-wrap project-list'>
    
    {{#each portfolioData}}
    <li id="project-{{removeSpaces name}}" onclick="displayInfo(this, {{@index}}, event)">
    {{> cardFront}}
    </li>
    {{/each}}
    </ul>`
);

const uninteractiveLayout = document.querySelector('#main-content').innerHTML;
// Save previous layout for conservative site viewers
function toggleOldLayout(toNew) {
    const mainContent = document.getElementById('main-content');
    const templatedLayout = template({ portfolioData: portfolioData });
    if (toNew)
        mainContent.innerHTML = toNew ? templatedLayout : uninteractiveLayout;
    else
        mainContent.innerHTML = mainContent.innerHTML == uninteractiveLayout ? templatedLayout : uninteractiveLayout;
}

// execute the compiled template and print the output to the console
toggleOldLayout(true);

