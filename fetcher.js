// Takes two cmd line args, a URL, a local file path 
// should print out a message like "Downloaded and saved 1235 bytes to ./index.html"

// accept cmd line args, split them for use in our function
const argsArray = process.argv.slice(2); // argsArray[0] is our URL, argsArray[1] is our path that we wish to download the file to
const URL = argsArray[0];
const localPath = argsArray[1]; 

// File system in node  
const fs = require('fs'); 

// Request library and callback 
const request = require('request');
request(URL, (error, response, body) => {     // Use our cmd line arg for URL 
  if(error || response.statusCode !== 200) {  // Checks if there are errors or status code is not 200 
    console.log('error:', error);             // Print the error if one occurred
  } else {
    // File writting using the body we requested and now have 
    fs.writeFile(localPath, body, err => { // Pass our path for location where to write file, the data of body to write, and callback fn 
    if (err) {                             // if no errors, callback function completes and writes file successfully, console logging our msg 
      console.error(err); 
    }
    // console.log the file size in bytes (the length of the body in chars = bytes) and localPath 
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
    });
  }
});

// Test URL and path  http://www.example.edu/ \\wsl.localhost\LHL\home\labber\page-fetcher\
 
