createLinkElement('text/css', 'stylesheet', '/style.css');
createLinkElement('text/css', 'stylesheet', '/css/style.css');
createLinkElement('image/x-icon', 'shortcut icon', '/icon.ico');
createLinkElement('image/x-icon', 'shortcut icon', '/images/icon.ico');

console.log("The style was linked and the favicon was added.");

function goToHomePage() {
	window.location = "https://knowledgeablekangaroo.github.io";
}

function goBack() {
	window.history.back();
}

function createLinkElement(type, rel, href) {
    const linkEl = document.createElement("link");
    linkEl.type = type;
    linkEl.rel = rel;
    linkEl.href = href;
    document.head.appendChild(linkEl);
}