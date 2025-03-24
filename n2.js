// wap to copy a contain from 1file to another file...data should be fatch fron a1.txt nd insert ti a2.txt

var ps = require("fs");

// ps.writeFileSync("A1.txt", "Hello");

// data = ps.readFileSync("A1.txt", "UTF-8");
// ps.writeFileSync("A2.txt", data);

data1 = ps.readFileSync("A2.txt", "UTF-8");
console.log(data1);