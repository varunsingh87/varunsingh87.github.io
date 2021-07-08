// Removes spaces to make id and class names valid
Handlebars.registerHelper("removeSpaces", function (value) {
	return value.replace(" ", "");
});

Handlebars.registerHelper("ifCond", function (v1, v2, options) {
	if (v1 === v2)
		return options.fn(this);
	
	return options.inverse(this);
});

Handlebars.registerPartial(
	"cardFront",
	`
<p>{{name}}</p>
{{#if img}}
<img src = '{{img}}'>
{{/if}}
{{#if description}}
<p class="description">{{description}}</p>
{{/if}}
<ul class="skills-stack">
{{#each softwareDevelopmentTools.languages}}
<li>{{this}}</li>
{{/each}}
{{#each softwareDevelopmentTools.apis}}
<li>{{this}}</li>
{{/each}}
{{#each softwareDevelopmentTools.libraries}}
<li>{{this}}</li>
{{/each}}
{{#each softwareDevelopmentTools.frameworks}}
<li>{{this}}</li>
{{/each}}
</ul>
<p>Category: {{category}}</p>
{{#if status}}
<p>Status: {{status}}</p>
{{#if borumProduct}}
<img src='./images/borumtech.png' style='width:100%; background: none; display:block; height:20px'>
{{/if}}
<a onclick="event.stopPropagation()" target="_blank" href="{{link}}">View Project</a>
{{/if}}
`
);

Array.prototype.unique = function () {
	var a = this.concat();
	for (var i = 0; i < a.length; ++i) {
		for (var j = i + 1; j < a.length; ++j) {
			if (a[i] === a[j]) a.splice(j--, 1);
		}
	}

	return a;
};
