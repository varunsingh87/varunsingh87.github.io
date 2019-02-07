const iconLink = document.createElement("link"); // Create link element
iconLink.type = "image/x-icon";
iconLink.rel = "shortcut icon";
iconLink.href = 'icon.ico';
console.log('first', iconLink.href);
iconLink.href = urlExists('icon.ico', iconLink.href, 'images')
console.log('double-function executed', iconLink.href);
iconLink.href = checkIfUrlExists('icon.ico', 'images/icon.ico');
console.log('new function executed', iconLink.href);
iconLink.href = 'images/icon.ico';
console.log('location is in folder', iconLink.href);

document.head.appendChild(iconLink);

const stylesheetLink = document.createElement("link");
stylesheetLink.type = "text/css";
stylesheetLink.rel = "stylesheet";
stylesheetLink.href = 'style.css';
//checkIfUrlExists(stylesheetLink.href, 'css/style.css');

document.head.appendChild(stylesheetLink);

console.log("The style was linked and the favicon was added.");

function goToHomePage() {
	window.location = "https://knowledgeablekangaroo.github.io";
}

function goBack() {
	window.history.back();
}

function UrlExists(url)
{
    const http = new XMLHttpRequest();
    http.open('GET', url, true);
    try {
    	http.send();
    } catch (e) {
    	return false;
    }
    return http.status != 404;
}

function urlExists(url, toChange, supposedDir) {
    let toChange_value = toChange;
	if (!UrlExists(url)) {
		toChange_value = supposedDir + '/' + url;
        console.log(toChange);
        console.log('The url does not exist');
	} else {
        console.log('The url exists.')
    }

    return toChange_value;
}

function checkIfUrlExists(toChange, newDir) {
    const xhr = new XMLHttpRequest(); // Creates an object which can read files from the server
    let checkFor = toChange; // Set default value of the url to the original value

    // Opens the file and specifies the method (get); Asynchronous is true
    xhr.open('get', checkFor, true);

    //check each time the ready state changes
    //to see if the object is ready
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            // Check to see whether request for the file failed or succeeded
            if (!(xhr.status == 200 || xhr.status == 0)) {
                checkFor = newDir; // If it does not exist, change the value to the new directory
                console.log('The value of checkFor is', checkFor);
                console.log('The value of newDir is', newDir);
            }
            console.log('Status: ' + xhr.status);
        }
        console.log('Ready State: ' + xhr.readyState);
    }

    xhr.send(null);

    return checkFor;

}

