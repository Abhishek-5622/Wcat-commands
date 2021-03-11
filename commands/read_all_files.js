fs = require('fs');

// path =['C:/Users/hp/Documents/Abhishek_Mehta.doc','C:/Users/hp/Documents/Finicial aid request.docx'];

function read_all_file(dirpath){
  fs.readFile(dirpath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
}

function read_all_file_fn(path)
{
    for(let dir in path)
    {
        read_all_file(path[dir]);
    }
}

//Export function
module.exports = {
  read_all_filefn: read_all_file_fn
}