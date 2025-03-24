var ps = require("fs");
// ps.writeFileSync("s1.txt", "32,1,0,3,64,89");

data = ps.readFileSync("s1.txt", "UTF-8");
data = data.split("");

d = data.sort((a, b) => a - b);
// console.log(d);

// or
let p = [];
for (i = 0; i < d.length;i++){
    p[i] = parseInt(d[i]);
}
console.log(p);