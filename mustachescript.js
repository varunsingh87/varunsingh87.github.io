const portfolioData = [
    {
        name: "Borum Farms",
        category: "Personal",
        status: "Current",
        borumProduct: true,
        link: "",
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
    }
];


Handlebars.registerPartial('cardBack', `
<p>{{name}} ({{category}})</p>
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

function displayInfo(el, ind) {
    el.classList.toggle('show-info');

    let compile = function(partial) {
        compileHandlebarsWithCurrentItem(el, ind, partial)
    };

    compile(el.classList.contains('show-info') ? 'cardBack' : 'cardFront');
    
}

// Removes spaces to make id and class names valid
Handlebars.registerHelper('removeSpaces', function(value) {
    return value.replace(" ", "");
})

// compile the template
var template = Handlebars.compile(
    `<ul class = 'd-flex p-2 flex-wrap project-list'>
    
    {{#each portfolioData}}
    <li id="project-{{removeSpaces name}}" onclick="displayInfo(this, {{@index}})">
    {{> cardFront}}
    </li>
    {{/each}}
    </ul>`
);

// execute the compiled template and print the output to the console
document.getElementById('main-content').innerHTML = template({ portfolioData: portfolioData });
