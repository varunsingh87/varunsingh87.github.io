const iconUrl = "icon.ico"; // Set url to check if the location being linked to is created
const iconLink = document.createElement("link"); // Create link element
iconLink.type = "image/x-icon";
iconLink.rel = "shortcut icon";
iconLink.href = urlExists(iconUrl) ? iconUrl : "images/" + iconUrl;

document.querySelector("head").appendChild(iconLink);

const stylesheetUrl = "style.css"; // Set url to check if the location being linked to is created
const stylesheetLink = document.createElement("link");
stylesheetLink.type = "text/css";
stylesheetLink.rel = "stylesheet";
stylesheetLink.href = urlExists(stylesheetUrl) ? stylesheetUrl : "css/" + stylesheetUrl;

document.querySelector("head").appendChild(stylesheetLink);

console.log("The style was linked and the favicon was added.");

function goToHomePage() {
	window.location = "https://knowledgeablekangaroo.github.io";
}

function goBack() {
	window.history.back();
}

function urlExists(url) {
  var request = new XMLHttpRequest();  
	request.open('GET', url, true);
	request.onreadystatechange = function(){
	    if (request.readyState === 4){
	        if (request.status === 404) {  
	            return false;
	        }  
	        return true;
	    }
	};
	request.send();
}

