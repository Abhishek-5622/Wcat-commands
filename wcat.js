
let read_all_obj = require("./commands/read_all_files");

let arr=[];
for (let j = 2; j < process.argv.length; j++) {
    dir =process.argv[j];
    arr.push(dir);
}

read_all_obj.read_all_filefn(arr);