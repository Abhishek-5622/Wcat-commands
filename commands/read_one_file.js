fs = require('fs');

function read_one_file(dirpath){
  fs.readFile(dirpath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
}

//Export function
module.exports = {
  read_one_filefn: read_one_file
}

// dirpath='C:/Users/hp/Documents/Abhishek_Mehta.doc'