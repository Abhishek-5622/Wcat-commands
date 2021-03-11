fs = require('fs');

var lineNumbers = require("line-numbers")
 
function read_one_file(dirpath){
    fs.readFile(dirpath, 'utf8', function (err,data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
  }

var string = [
  "function sum(a, b) {",
  "  return a + b;",
  "}"
].join("\n")
 
console.log(lineNumbers(string))

