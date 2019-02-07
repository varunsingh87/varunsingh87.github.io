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

  if (stats.isDirectory()) {
    console.log(filename + ": is a directory");
  } else {
    console.log(filename);
  }
});