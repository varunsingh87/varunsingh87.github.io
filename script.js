const link = document.createElement("link");
link.type = "image/x-icon";
link.rel = "shortcut icon";
link.href = "./icon.ico";
document.getElementsByTagName("head")[0].appendChild(link);

const stylesheetLink = top.document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "style.css";
top.document.getElementsByTagName("head")[0].appendChild(link);

console.log("The style was linked and the favicon was added.");

function goToHomePage() {
	window.location = "https://knowledgeablekangaroo.github.io";
}

function goBack() {
	window.history.back();
}