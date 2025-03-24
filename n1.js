// perform the crud operation with the file system methods.
// 1. to create a folder.
// 2. create one file inside that folder.
// 3. append some data to that file.
// 4. read the data from the file.
// 5. rename that file.
// 6.delete that file.

var ps=require("fs");
// ps.mkdirSync("node");
ps.writeFileSync("node/write.txt","Hello");