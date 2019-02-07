var fs = require('fs')
  , filename ='icon.ico'
  ;

fs.stat(filename, function(err, stats) { 
  if(err){
    //doing what I call "early return" pattern or basically "blacklisting"
    //we stop errors at this block and prevent further execution of code

    //in here, do something like check what error was returned
    switch(err.code){
      case 'ENOENT':
        filename = 'images/' + filename;
        console.log(filename)
        break;
    }
    //of course you should not proceed so you should return
    return;
  }

  //back there, we handled the error and blocked execution
  //beyond this line, we assume there's no error and proceed
});




const iconLink = document.createElement("link"); // Create link element
iconLink.type = "image/x-icon";
iconLink.rel = "shortcut icon";
iconLink.href = fileName;
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

