let url = "";

url = "icon.ico"; // Set url to check if the location being linked to is created
const link = document.createElement("link"); // Create link element
link.type = "image/x-icon";
link.rel = "shortcut icon";
link.href = url;
urlExists(url, function(exists) { // Request to check if url exists
	  if (!exists) {
	  	link.href = "images/" + url;
	  }
	}
);
document.querySelector("head").appendChild(link);

url = "style.css"; // Set url to check if the location being linked to is created
const stylesheetLink = document.createElement("link");
stylesheetLink.type = "text/css";
stylesheetLink.rel = "stylesheet";
stylesheetLink.href = url;
urlExists(url, function(exists) { // Request to check if url exists
	  if (!exists) {
	    stylesheetLink.href = "css/" + url;
	  }
	}
);
document.querySelector("head").appendChild(stylesheetLink);

console.log("The style was linked and the favicon was added.");

function goToHomePage() {
	window.location = "https://knowledgeablekangaroo.github.io";
}

function goBack() {
	window.history.back();
}

function urlExists(url, callback) {
  fetch(url)
  .then(function(status) {
    callback(status.ok);
  });
}

