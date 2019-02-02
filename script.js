const iconUrl = "icon.ico"; // Set url to check if the location being linked to is created
const iconLink = document.createElement("link"); // Create link element
iconLink.type = "image/x-icon";
iconLink.rel = "shortcut icon";
iconLink.href = iconUrl;
console.log(urlExists(iconUrl, iconLink.href, 'images'));

document.querySelector("head").appendChild(iconLink);

const stylesheetUrl = "style.css"; // Set url to check if the location being linked to is created
const stylesheetLink = document.createElement("link");
stylesheetLink.type = "text/css";
stylesheetLink.rel = "stylesheet";
stylesheetLink.href = stylesheetUrl;
console.log(urlExists(stylesheetUrl, stylesheetLink.href, 'css'));

document.querySelector("head").appendChild(stylesheetLink);

console.log("The style was linked and the favicon was added.");

function goToHomePage() {
	window.location = "https://knowledgeablekangaroo.github.io";
}

function goBack() {
	window.history.back();
}

function urlExists(url, toChange, supposedDir) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status != 404;
}

