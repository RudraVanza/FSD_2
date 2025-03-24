// perform the crud operation with the file system methods.
// 1. to create a folder.
// 2. create one file inside that folder.
// 3. append some data to that file.
// 4. read the data from the file.
// 5. rename that file.
// 6.delete that file.

// 1
var ps=require("fs");
// ps.mkdirSync("node");

// 2
// ps.writeFileSync("node/write.txt", "Hello");

// 3
// ps.appendFileSync("node/write.txt", "Hii");

// 4
// data = ps.readFileSync("node/write.txt");
// console.log(data.toString());
//or
// data = ps.readFileSync("node/write.txt", "UTF-8");
// console.log(data);

// 5
// ps.renameSync("node/write.txt", "node/readwrite.txt");

// 6
ps.unlinkSync("node/readwrite.txt")